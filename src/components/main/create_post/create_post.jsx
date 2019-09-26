import React, { Component } from "react";

class CreatePost extends Component {
  getPostInput(e) {
    const { name, value } = e.target;
    if (name === "title") {
    } else if (name === "post_data") {
    }
  }

  postArticle = () => {};

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            onChange={this.getPostInput}
            placeholder="Title"
          />
          <input
            type="text"
            name="post_data"
            onChange={this.getPostInput}
            placeholder="Message"
          />
          <input type="submit" onClick={this.postArticle} value="POST" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
