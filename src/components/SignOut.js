import React from "react";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <div className="ui teal button" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </div>
);
export default withFirebase(SignOutButton);
