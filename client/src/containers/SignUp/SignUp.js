import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import FormFieldGroup from '../../components/Common/FormFieldGroup';

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

    return (
      <Form onSubmit={this.onSubmit}>
        <FormFieldGroup
          label="Name"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          error={errors.name}
        />
        <FormFieldGroup
          label="Email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          error={errors.email}
        />
        <FormFieldGroup
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          error={errors.password}
        />
        <FormFieldGroup
          label="Confirm Password"
          placeholder="Confirm Password"
          name="password2"
          type="password"
          value={this.state.password2}
          onChange={this.handleChange}
          error={errors.password2}
        />

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
