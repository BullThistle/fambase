/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Comment } from 'semantic-ui-react';
// import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
  // onDeleteClick(postId, commentId) {
  //   this.props.deleteComment(postId, commentId);
  // }

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <Comment>
        <Comment.Avatar src={comment.avatar} style={{ borderRadius: '50%' }} />
        <Comment.Content>
          <Comment.Author as="a">{comment.name}</Comment.Author>
          <Comment.Metadata>
            <span>
              <Moment ago format="MM/DD">
                {comment.date}
              </Moment>
            </span>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommentItem);
