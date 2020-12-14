import React from "react";

import { withFirebase } from "../Firebase";

const GoogleButton = ({ firebase }) => (
  <div className="ui teal button" onClick={firebase.doSignInWithPopup}>
    Sign Google
  </div>
);
export default withFirebase(GoogleButton);
