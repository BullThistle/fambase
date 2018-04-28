import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    /*eslint-disable*/
    return (
      <Menu>
        <Menu.Item header href="/">
          Fambase
        </Menu.Item>
        <Menu.Item href="/about">About</Menu.Item>
        <Menu.Item onClick={this.onLogoutClick.bind(this)}>Logout</Menu.Item>
      </Menu>
    );
    /* /*eslint-enable*/
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
