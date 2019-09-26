import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewPost from "./components/main/view_post/view_post";
import CreatePost from "./components/main/create_post/create_post";

function App() {
  return (
    <div>
      {/* <CreatePost /> */}
      <ViewPost />
    </div>
  );
}

export default App;
