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
  firstName: "",
  lastName: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  isReader: "",
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
    const {
      username,
      firstName,
      lastName,
      email,
      passwordOne,
      isReader,
      isAdmin,
      terms,
    } = this.state;
    const roles = [];

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }
    if (isReader) {
      roles[ROLES.READER] = ROLES.READER;
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        //create user in db
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, firstName, lastName, email, roles, terms });
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
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    const {
      username,
      firstName,
      lastName,
      email,
      passwordOne,
      passwordTwo,
      isReader,
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
        <div className="sixteen wide column">
          <form className="ui form " onSubmit={this.onSubmit}>
            <h2 className="ui dividing header centered">Sign Up</h2>

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
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="LastName"
                name="lastName"
                value={lastName}
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
                  checked={isAdmin}
                  onChange={this.onChangeRoleCheckBox}
                />
              </div>
            </div>
            <div className=" inline field">
              <label>Reader: </label>
              <div className="ui ">
                <input
                  name="isReader"
                  type="checkbox"
                  checked={isReader}
                  onChange={this.onChangeRoleCheckBox}
                />
              </div>
            </div>

            <div className=" inline field">
              <label>I agree to the terms and conditions </label>
              <div className="ui ">
                <input
                  name="terms"
                  type="checkbox"
                  value={terms}
                  onChange={this.onChangeRoleCheckBox}
                />
              </div>
            </div>
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
