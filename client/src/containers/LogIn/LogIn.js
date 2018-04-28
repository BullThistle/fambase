import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import FormFieldGroup from '../../components/Common/FormFieldGroup';

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
          value={this.state.password}
          onChange={this.handleChange}
          error={errors.password}
        />
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
