/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import PostForm from './PostForm';
import Spinner from '../../components/Common/Spinner';

class Posts extends Component {
  render() {
    return (
      <Container>
        <Header>Posts</Header>
        <PostForm />
      </Container>
    );
  }
}

export default Posts;
