import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/">Log In</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedOutLinks;
