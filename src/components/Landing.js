import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    var korpaImage = require("./img/korpa.jpg");
    return (
      <div className="ui grid stackable padded landing">
        <div className="sixteen wide  column">
          <h1></h1>
          <div
            style={{
              marginTop: "15%",
            }}
          >
            <img
              className="korpa"
              src={korpaImage}
              alt="mainImg"
              style={{
                borderRadius: "8px",
                boxShadow: " 0 8px 6px -6px black",
                display: "block",
                margin: "auto",
              }}
            />
            <div className="textcentered">The Store Is On</div>
          </div>
        </div>
      </div>
    );
  }
}
