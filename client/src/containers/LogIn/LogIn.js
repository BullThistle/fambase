import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Label, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
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
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

LogIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(LogIn);
