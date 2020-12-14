import React from "react";
import { Component } from "react";
import Chatty from "./Chatty";
import { compose } from "recompose";
import * as ROLES from "../constants/roles";
import { withAuthorization } from "./session";
import { withFirebase } from "../Firebase";

const HomePage = () => (
  <div className="">
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <Chatty />
  </div>
);

const condition = (authUser) => authUser;

export default compose(withAuthorization(condition), withFirebase)(HomePage);
