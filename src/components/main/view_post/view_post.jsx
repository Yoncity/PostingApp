import React, { Component } from "react";
import "./view_post.css";

// Redux Related
import { connect } from "react-redux";
import {
  fetchPostBegin,
  fetchPostSuccess,
  fetchPostError
} from "../../../action/postAction";

class ViewPost extends Component {
  fetchPosts() {
    this.props.fetchPostBegin();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.props.fetchPostSuccess(posts))
      .catch(error => this.props.fetchPostError(error));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { loading, error, posts } = this.props;

    if (loading) {
      return <div>Loading....</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }
    if (posts) {
      return (
        <div id="posts_container">
          {posts.map(post => (
            <div className="post">
              <p className="post_title">{post.title}</p>
              <p className="post_body">{post.body}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapState = state => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error
});

const mapDispatch = {
  fetchPostBegin,
  fetchPostSuccess,
  fetchPostError
};

export default connect(
  mapState,
  mapDispatch
)(ViewPost);
