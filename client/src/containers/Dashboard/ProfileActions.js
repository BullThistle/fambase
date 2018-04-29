import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Header } from 'semantic-ui-react';

const IconExampleRotated = () => (
  <div style={{ display: 'inline' }}>
    <Header as="h4" style={{ display: 'inline' }}>
      <Icon name="user" />
      <Link to="/edit-profile">Edit Profile</Link>
    </Header>
    <Header as="h4" style={{ display: 'inline' }}>
      <Icon name="calendar" />
      <Link to="/add-event">Add Event</Link>
    </Header>
  </div>
);

export default IconExampleRotated;
