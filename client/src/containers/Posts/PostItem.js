import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Button, Image } from 'semantic-ui-react';
import { deletePost } from '../../actions/postActions';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { post } = this.props;
    this.props.deletePost(post._id);
  }
  render() {
    const { post, auth } = this.props;
    return (
      <Container>
        <Header>{post.name}</Header>
        <p>{post.text}</p>
        <Image src={post.avatar} />
        {post.user === auth.user.id ? (
          <Button onClick={this.handleDelete}>Delete</Button>
        ) : null}
      </Container>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({}).isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostItem);
