import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid, Header } from 'semantic-ui-react';
import PostForm from './PostForm';
import Spinner from '../../components/Common/Spinner';
import { getPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <Container>
        <Grid padded="vertically">
          <Grid.Row>
            <Header>Posts</Header>
          </Grid.Row>
          <Grid.Row>
            <PostForm />
          </Grid.Row>
          <Grid.Row>{postContent}</Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.shape({
    posts: PropTypes.shape({}).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
