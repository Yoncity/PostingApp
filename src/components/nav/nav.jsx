import React, { Component } from "react";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <div id="my_nav">
        <div id="logo">LOGO</div>
        <div id="settings">
          <span id="profile"></span>
        </div>
      </div>
    );
  }
}

export default Nav;
