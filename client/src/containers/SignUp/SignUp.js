import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Label, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history); //eslint-disable-line
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="Name">
            Name
            <input
              id="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          {errors.name && (
            <Label basic color="red" pointing>
              {errors.name}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="Email">
            Email
            <input
              id="Email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          {errors.email && (
            <Label basic color="red" pointing>
              {errors.email}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="Password">
            Password
            <input
              id="Password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          {errors.password && (
            <Label basic color="red" pointing>
              {errors.password}
            </Label>
          )}
        </Form.Field>
        <Form.Field>
          <label htmlFor="Password2">
            Password Confirmation
            <input
              id="Password2"
              name="password2"
              placeholder="Password Confirmation"
              value={this.state.password2}
              onChange={this.handleChange}
            />
          </label>
          {errors.password2 && (
            <Label basic color="red" pointing>
              {errors.password2}
            </Label>
          )}
        </Form.Field>
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
