import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../constants/routes";

const PasswordForget = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }
  onSubmit = (e) => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        console.log("RESET PASS ERROR", error);
        this.setState({ error });
      });
    e.preventDefault();
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isValid = email === "";
    return (
      <div className="ui grid signupForm">
        <form className="ui form" onSubmit={this.onSubmit}>
          {" "}
          <h1 className="ui dividing header centered">Password forget</h1>
          <div className="field">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.onChange}
            />
          </div>
          <button disabled={isValid} className="ui teal button">
            Reset Password
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    Forgot
    <Link to={ROUTES.PASSWORD_FORGET}> Password?</Link>
  </p>
);

export default PasswordForget;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
