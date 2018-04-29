import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import FormFieldGroup from '../../components/Common/FormFieldGroup';
import { addEvent } from '../../actions/profileActions';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      what: '',
      where: '',
      errors: {},
      selectedDay: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eventData = {
      what: this.state.what,
      where: this.state.where,
      when: this.state.selectedDay,
    };

    this.props.addEvent(eventData, this.props.history);
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Container>
          <Header as="h2" content="Add Event" />
          <Form onSubmit={this.onSubmit}>
            <FormFieldGroup
              label="Event Name"
              placeholder="Event Name"
              name="what"
              value={this.state.what}
              onChange={this.handleChange}
              error={errors.what}
            />
            <FormFieldGroup
              label="Location"
              placeholder="Location"
              name="where"
              value={this.state.where}
              onChange={this.handleChange}
              error={errors.where}
            />
            <DayPickerInput onDayClick={this.handleDayClick} />
            {this.state.selectedDay ? (
              <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
            ) : (
              <p>Please select a day.</p>
            )}
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
});

/* eslint-disable */
export default connect(mapStateToProps, { addEvent })(withRouter(AddEvent));
/* eslint-enable */
