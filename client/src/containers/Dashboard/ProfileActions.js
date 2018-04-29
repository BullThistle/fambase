import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

const IconExampleRotated = () => (
  <div style={{ display: 'inline' }}>
    <Header as="h4" style={{ display: 'inline' }}>
      <Icon name="user" />
      Edit Profile
    </Header>
    <Header as="h4" style={{ display: 'inline' }}>
      <Icon name="calendar" />
      Add Event
    </Header>
  </div>
);

export default IconExampleRotated;
