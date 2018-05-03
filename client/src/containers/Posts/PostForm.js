import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Header,
  Form,
  TextArea,
  Button,
  Label,
} from 'semantic-ui-react';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Row>
            <Header content="Post Form" style={{ display: 'block' }} />
          </Grid.Row>
          <Grid.Row>
            <Form
              style={{ width: '40%', margin: '0', display: 'block' }}
              onSubmit={this.handleSubmit}
            >
              <Form.Field
                control={TextArea}
                placeholder="Whats on your mind..."
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
              {errors.text && (
                <Label basic color="red" pointing>
                  {errors.text}
                </Label>
              )}
              <Button type="submit" style={{ width: '100%' }}>
                Post
              </Button>
            </Form>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

PostForm.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({}).isRequired,
  }).isRequired,
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostForm);
