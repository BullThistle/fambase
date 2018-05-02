/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import ProfileItem from './ProfileItem';
import Spinner from '../../components/Common/Spinner';
import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else if (profiles.length > 0) {
      profileItems = profiles.map(profile => (
        <ProfileItem key={profile._id} profile={profile} />
      ));
    } else {
      profileItems = <h4>No prfiles found...</h4>;
    }

    return (
      <Container>
        <Header>Profiles</Header>
        {profileItems}
      </Container>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    profiles: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
