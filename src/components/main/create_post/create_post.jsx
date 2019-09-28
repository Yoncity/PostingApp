import React, { Component } from "react";

import "./create_post.css";

// Redux Related
import { connect } from "react-redux";
import {
  addPostBegin,
  addPostSuccess,
  addPostError,
  addPostFields,
  clearPostFields
} from "../../../action/postAction";

class CreatePost extends Component {
  getPostInput = e => {
    const { name, value } = e.target;
    const tmp = this.props.posts;

    if (name === "title") tmp["title"] = value;
    else if (name === "post_data") tmp["body"] = value;

    this.props.addPostFields(tmp);
  };

  postArticle = () => {
    const { title, body } = this.props.post_fields;
    let tmp = this.props.posts;
    if (title && body) {
      try {
        this.props.addPostBegin();

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({ title, body }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(json => {
            tmp.unshift({ title, body });
            this.props.addPostSuccess(tmp);
            this.props.clearPostFields();
          });
      } catch (error) {
        this.props.addPostError(error);
      }
    }
  };

  render() {
    return (
      <div id="create_post">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="title"
            onChange={this.getPostInput}
            placeholder="Title"
          />

          <div id="fields_container">
            <textarea
              id="body_field"
              type="textarea"
              name="post_data"
              onChange={this.getPostInput}
              placeholder="Write Something.."
            />
            <input type="submit" onClick={this.postArticle} value="POST" />
          </div>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts,
  post_fields: state.post_fields,
  loading: state.loading,
  error: state.error
});

const mapDispatch = {
  addPostBegin,
  addPostSuccess,
  addPostError,
  addPostFields,
  clearPostFields
};

export default connect(
  mapState,
  mapDispatch
)(CreatePost);
