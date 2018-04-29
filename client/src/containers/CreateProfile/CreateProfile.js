import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import FormFieldGroup from '../../components/Common/FormFieldGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  static getDerivedStateFromProps = nextProps => ({ errors: nextProps.errors });

  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      ask: '',
      interests: '',
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      ask: this.state.ask,
      interests: this.state.interests,
    };
    this.props.createProfile(profileData, this.props.history);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormFieldGroup
            label="User Name"
            placeholder="User Name"
            name="handle"
            value={this.state.handle}
            onChange={this.handleChange}
            error={errors.handle}
          />
          <FormFieldGroup
            label="Ask"
            placeholder="Ask"
            name="ask"
            value={this.state.ask}
            onChange={this.handleChange}
            error={errors.ask}
          />
          <FormFieldGroup
            label="Interests (seperated by commas)"
            placeholder="Interests"
            name="interests"
            value={this.state.interests}
            onChange={this.handleChange}
            error={errors.interests}
          />
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  history: PropTypes.shape({}).isRequired,
  createProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});
/* eslint-disable */
export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
/* eslint-enable */
