/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class PostFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { comments } = this.props;
    return comments.map(comment => (
      <CommentItem comment={comment} key={comment._id} />
    ));
  }
}

PostFeed.propTypes = {
  comments: PropTypes.shape({}).isRequired
};

export default PostFeed;
