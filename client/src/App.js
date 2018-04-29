import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { Landing } from 'components';
import Navbar from './containers/Navbar/Navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import CreateProfile from './containers/CreateProfile/CreateProfile';
import EditProfile from './containers/EditProfile/EditProfile';
import AddEvent from './containers/AddEvent/AddEvent';

class App extends Component {
  isAuthenticatedUser() {
    /* eslint-disable */
    if (this.props.auth.isAuthenticated) {
      /* eslint-enable */
      return (
        <div>
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/add-event" component={AddEvent} />
        </div>
      );
    }
    return (
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>{this.isAuthenticatedUser()}</Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(App);
