import React from "react";
import profilePic from "./images/default-fem-profile.svg";
import homeButton from "./images/home-button.png";
import { Link } from "react-router-dom";

class ProfileName extends React.Component {
  render() {
    return (
      <div className="text-container-profile">WELCOME {this.props.name}</div>
    );
  }
}

class HeaderEduPoints extends React.Component {
  // TODO
  go_back() {
    alert("Hello world!");
  }

  render() {
    return (
      <div className="header-main">
        <div className="profile-view">
          <img className="profile-pic" src={profilePic}></img>
          <ProfileName name={this.props.name} />
        </div>
        <div className="balance-board">
          <div className="balance-heading">EDUPOINTS BALANCE:</div>
          <div className="balance-display">{this.props.balance}</div>
          <Link to="/">
            <img alt="home" src={homeButton} className="home-button"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default HeaderEduPoints;
