import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
class Navbar extends Component {
  render() {
    const { auth, profile } = this.props;
    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <nav className="nav-wrapper grey darken-3 ">
        <div className="container">
          <Link to="/" className="brand-logo left">
            Kaizen
          </Link>

          {links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

export default connect(mapStateToProps)(Navbar);
