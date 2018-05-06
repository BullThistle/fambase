/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment, getPosts } from '../../actions/postActions';
import { Form, Button, Input, Icon } from 'semantic-ui-react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    console.log('Inside Form', postId);
    this.props.addComment(postId, newComment);
    this.setState({ text: '' });
    this.props.getPosts();
  }

  onChange(e) {
    console.log(this.props.postId);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <Form reply onSubmit={this.onSubmit}>
        <Form.TextArea
          rows={1}
          autoHeight
          placeholder="Add Reply..."
          name="text"
          value={this.state.text}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

// CommentForm.propTypes = {
//   addPost: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   postId: PropTypes.string.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addComment, getPosts })(CommentForm);
