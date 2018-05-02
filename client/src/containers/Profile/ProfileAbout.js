import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const ProfileAbout = (props) => {
  const { profile } = props;
  return (
    <Container>
      <Header>{profile.ask}</Header>
      <Header>{profile.interests}</Header>
    </Container>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

export default ProfileAbout;
