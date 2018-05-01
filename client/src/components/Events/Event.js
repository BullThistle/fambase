import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Header, Card, List, Container } from 'semantic-ui-react';

const Event = (props) => {
  const events = props.event.map(event => (
    <List.Item key={event.id} style={{ marginTop: '10px' }}>
      <Card centered>
        <Card.Content header={event.what} />
        <Card.Meta>
          <Moment format="MM/DD/YY">{event.when}</Moment>
        </Card.Meta>
        <Card.Content description={event.where} />
      </Card>
    </List.Item>
  ));

  return (
    <Container textAlign="center">
      <Header>Events</Header>
      <List style={{ textAlign: 'center', marginTop: '40px' }}>{events}</List>
    </Container>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Event;
