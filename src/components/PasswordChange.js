import React, { Component } from "react";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }
  onSubmit = (e) => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        console.log("PASSWORD UPDATE ERROR", error);
        this.setState({ error });
      });
    e.preventDefault();
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isValid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <div className="ui grid signupForm">
        <form className="ui form">
          <h2 className="ui dividing header centered">Change Password</h2>
          <div className="field">
            <input
              type="text"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              placeholder="New Password"
            />
          </div>
          <div className="field">
            <input
              type="text"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              placeholder="Confirm New Password"
            />
          </div>
          <button disabled={isValid} className="ui teal button">
            Update Password
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
export default withFirebase(PasswordChangeForm);
