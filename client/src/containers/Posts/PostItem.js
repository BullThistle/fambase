/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentFeed from './CommentFeed';
import CommentForm from './CommentForm';
import {
  Container,
  Segment,
  Button,
  Comment,
  Header,
  Icon,
  Feed,
  Confirm
} from 'semantic-ui-react';
import { deletePost } from '../../actions/postActions';

class PostItem extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  state = { open: false };

  show = () => this.setState({ open: true });
  handleConfirm = () => this.setState({ open: false });
  handleCancel = () => this.setState({ open: false });

  componentDidMount() {
    console.log('PROPS', this.props);
  }

  handleDelete() {
    const { post } = this.props;
    this.props.deletePost(post._id);
  }

  render() {
    const { post, auth } = this.props;
    return (
      <Container style={{ width: '70%', marginBottom: '30px' }}>
        <Segment>
          {post.user === auth.user.id ? (
            <Icon
              onClick={this.show}
              link
              disabled
              name="trash outline"
              style={{ textAlign: 'right', float: 'right' }}
            />
          ) : null}
          <Confirm
            content="Are you sure you would like to delete this post?"
            open={this.state.open}
            onCancel={this.handleCancel}
            onConfirm={this.handleDelete}
          />
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img src={post.avatar} />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <a>{post.name}</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{this.props.post.text}</Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Header as="h3" dividing>
            Comments
          </Header>
          <Comment.Group>
            <CommentFeed comments={this.props.post.comments} />
          </Comment.Group>
          <CommentForm postId={this.props.post._id} />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost })(PostItem);
