import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import LogIn from '../../containers/LogIn/LogIn';
import SignUp from '../../containers/SignUp/SignUp';

class LoginModal extends Component {
  state = { activeItem: 'Sign Up' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  loginOrSignup() {
    if (this.state.activeItem === 'Log In') return <LogIn />;
    return <SignUp />;
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu attached="top" tabular>
          <Menu.Item
            name="Log In"
            active={activeItem === 'Log In'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sign Up"
            active={activeItem === 'Sign Up'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment attached="bottom">{this.loginOrSignup()}</Segment>
      </div>
    );
  }
}

export default LoginModal;
