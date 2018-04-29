import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container } from 'semantic-ui-react';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../../components/Common/Spinner';
import ProfileActions from './ProfileActions';
import Event from '../../components/Events/Event';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  handleDelete() {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
          <ProfileActions />
          <Event event={profile.event} />
          <div style={{ marginBottom: '60px' }} />
          <Button negative onClick={this.handleDelete}>
            Delete My Account
          </Button>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p>Welcome {user.name}</p>
          <p>Your have not yet setup a profile, please add some info</p>
          <Link to="/create-profile">Create profile</Link>
        </div>
      );
    }

    return (
      <Container textAlign="center">
        <h1>Dashboard</h1>
        {dashboardContent}
      </Container>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.shape({}).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

/* eslint-disable */
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
/* eslint-enable */
