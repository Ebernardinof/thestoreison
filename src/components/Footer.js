import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment ">
        <h4 className="ui inverted header footy">@2020 The Store Is On</h4>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
