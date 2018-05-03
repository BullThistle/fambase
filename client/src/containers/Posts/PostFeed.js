import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <PostItem post={post} key={post._id} />);
  }
}

PostFeed.propTypes = {
  posts: PropTypes.shape({}).isRequired,
};

export default PostFeed;
