import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { Home, Landing } from 'components';
import Navbar from './containers/Navbar/Navbar';

class App extends Component {
  isAuthenticatedUser() {
    /* eslint-disable */
    if (this.props.auth.isAuthenticated) {
      /* eslint-enable */
      return (
        <div>
          <Navbar />
          <Route path="/" component={Home} />
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
