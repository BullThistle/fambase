import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Header, Card, List, Container, Icon } from 'semantic-ui-react';
import { deleteEvent } from '../../actions/profileActions';

class Event extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.deleteEvent(id, this.props.history);
  }

  render() {
    const events = this.props.event.map(event => (
      <List.Item key={event.id} style={{ marginTop: '10px' }}>
        <Card centered>
          <Card.Content header={event.what} />
          <Icon
            name="close"
            color="red"
            style={{
              position: 'absolute',
              top: '4px',
              left: '4px',
            }}
            onClick={this.handleDelete}
          />
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
  }
}

Event.propTypes = {
  history: PropTypes.shape({}).isRequired,
  deleteEvent: PropTypes.func.isRequired,
  event: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { deleteEvent })(withRouter(Event));
