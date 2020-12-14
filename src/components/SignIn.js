import React, { Component } from "react";
import { SignUpLink } from "./SignUp";
import * as ROUTES from "../constants/routes";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { PasswordForgetLink } from "./PasswordForget";

const SignIn = () => {
  return (
    <div className="ui grid signupForm">
      {/* <h2 className="ui dividing header ">Sign In</h2> */}
      <div>
        <SignInForm />
        <div></div>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        console.log("SIGN IN ERROR", error);
        this.setState({ error });
      });
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isValid = password === "" || email === "";
    return (
      <div className="ui grid signupForm">
        <form className="ui form" onSubmit={this.onSubmit}>
          <h2 className="ui dividing header centered">Sign In</h2>
          <div className="field">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="field">
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
            />
          </div>
          <div>
            <button className="ui teal button signin" disabled={isValid}>
              Sign In
            </button>
          </div>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);
export default SignIn;
