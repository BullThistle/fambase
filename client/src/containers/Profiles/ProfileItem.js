import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const ProfileItem = (props) => {
  const { profile } = props;
  return (
    <Container>
      <Header>This prof</Header>
      <p>{profile.user.name}</p>
      <p>{profile.ask}</p>
      <ul>
        {profile.interests
          .slice(0, 4)
          .map(interest => <li key={interest.id}>{interest}</li>)}
      </ul>
      <Link to={`/profile/${profile.handle}`}>View Profile</Link>
    </Container>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.shape({}).isRequired,
};

export default ProfileItem;
