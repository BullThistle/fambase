/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    console.log('POSTS', posts);
    return posts.map(post => (
      <PostItem post={post} key={post._id} style={{ marginBottom: '10px' }} />
    ));
  }
}

PostFeed.propTypes = {
  posts: PropTypes.shape({}).isRequired
};

export default PostFeed;
