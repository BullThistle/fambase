import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Button, Header, Container } from 'semantic-ui-react';
import FormFieldGroup from '../../components/Common/FormFieldGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/isEmpty';

class CreateProfile extends Component {
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

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const { profile } = nextProps.profile;
      const interestsCSV = profile.interests.join(',');
      profile.ask = !isEmpty(profile.ask) ? profile.ask : '';

      this.setState({
        handle: profile.handle,
        ask: profile.ask,
        interests: interestsCSV,
      });
    }
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
      <Container textAlign="center" style={{ width: '60%' }}>
        <Header as="h2" content="Edit Profile" />
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
      </Container>
    );
  }
}

CreateProfile.propTypes = {
  history: PropTypes.shape({}).isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.shape({}),
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

/* eslint-disable */
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
/* eslint-enable */
