/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    return (
      <Menu>
        <Menu.Item header href="/">
          Fambase
        </Menu.Item>
        <Menu.Item href="/">Dashboard</Menu.Item>
        <Menu.Item href="/profiles">Profiles</Menu.Item>
        <Menu.Item href="/posts">Posts</Menu.Item>
        <Menu.Item onClick={this.onLogoutClick.bind(this)}>Logout</Menu.Item>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

/* eslint-disable */
export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
