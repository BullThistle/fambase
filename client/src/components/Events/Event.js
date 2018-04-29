import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Header, Card, List } from 'semantic-ui-react';

const Event = (props) => {
  const events = props.event.map(event => (
    <List.Item key={event.id}>
      <Card>
        <Card.Content header={event.what} />
        <Card.Meta>
          <Moment format="MM/DD/YY">{event.when}</Moment>
        </Card.Meta>
        <Card.Content description={event.where} />
      </Card>
    </List.Item>
  ));

  return (
    <div>
      <Header>Events</Header>
      <List>{events}</List>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Event;
