/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import { getProfileByHandle } from '../../actions/profileActions';
import Spinner from '../../components/Common/Spinner';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <Link to="/profiles">Back to profiles</Link>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
        </div>
      );
    }
    return <Container>{profileContent}</Container>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      handle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
