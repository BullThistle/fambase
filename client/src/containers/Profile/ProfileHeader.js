import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const ProfileHeader = (props) => {
  const { profile } = props;
  return (
    <Container>
      <Header>{profile.user.name}</Header>
    </Container>
  );
};

ProfileHeader.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

export default ProfileHeader;
