import React, { Component } from "react";

import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../constants/routes";
import * as ROLES from "../constants/roles";

import "../App.css";

const SignUp = () => (
  <div>
    {/* <h1>SignUp</h1> */}
    <SignUpForm />
  </div>
);
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isAdmin: false,
  terms: false,
  error: null,
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (e) => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};

    if (isAdmin) {
      roles[roles.ADMIN] = ROLES.ADMIN;
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        //create user in db
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email, roles });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        console.log("createUser", error);
        this.setState({ error });
      });
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeRoleCheckBox = (e) => {
    this.setState({ isAdmin: true });
    console.log(this.isAdmin);
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      terms,
      error,
    } = this.state;

    const isValid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div className="ui grid signupForm">
        <form className="ui form " onSubmit={this.onSubmit}>
          <h2 className="ui dividing header centered">Sign Up</h2>
          {/* <div className="fields"> */}
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="joe@schmoe.com"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label>Repeat Password</label>
            <input
              type="password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
          </div>

          <div className=" inline field">
            <label>Admin: </label>
            <div className="ui ">
              <input
                name="isAdmin"
                type="checkbox"
                name="isAdmin"
                value={isAdmin}
                onChange={() => this.setState({ isAdmin: true })}
              />
              {console.log(isAdmin)}
            </div>
          </div>

          <div className=" inline field">
            <label>I agree to the terms and conditions </label>
            <div className="ui ">
              <input
                name="terms"
                type="checkbox"
                name="terms"
                value={terms}
                onChange={() => this.setState({ terms: true })}
              />
              {console.log(isAdmin)}
            </div>
          </div>
          {/* <div className=" inline field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                className=""
                name="terms"
                onChange={this.onChangeTerms}
              />
              <label>I agree to the terms and conditions</label>
            </div>
          </div> */}
          <button
            disabled={isValid}
            className="ui submit teal button"
            type="submit"
          >
            Submit
          </button>
          {error && <p>{error.message}</p>}
          {/* </div> */}
        </form>
      </div>
    );
  }
}
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUp;
export { SignUpForm, SignUpLink };
