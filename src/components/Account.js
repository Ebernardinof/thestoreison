import React from "react";
import { Component } from "react";
import { compose } from "recompose";

import PasswordChange from "./PasswordChange";
import { PasswordForgetForm } from "./PasswordForget";

import { AuthUserContext, withAuthorization } from "./session";
import UploadPhotoUrl from "./user/UploadPhotoUrl";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  username: "",
  firstName: "",
  lastName: "",
  photoURL: "",
  address: "",
  email: "",
  isReader: "",
  isAdmin: "",
  userProfile: [],
  error: null,
};
class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  componentDidMount() {
    console.log(this.state.authUser);
    this.listener = this.props.firebase.onAuthUserListener(
      (authUser) => {
        this.setState({ authUser });
      },
      () => {
        this.setState({ authUser: null });
      }
    );
    this.setState({ error: null });
    this.props.firebase.doUpdateCurrentUser().on("value", (snapshot) => {
      const userProfile = [];
      snapshot.forEach((snap) => {
        userProfile.set(snap.val());
      });
      this.setState({ userProfile });
    });
  }

  onSubmit = (e) => {
    const {
      username,
      firstName,
      lastName,
      photoURL,
      email,
      address,
      isReader,
      isAdmin,
    } = this.state;

    this.props.firebase
      .doUpdateCurrentUser(
        username,
        firstName,
        lastName,
        photoURL,
        email,
        address,
        isReader,
        isAdmin
      )
      .then(() => {
        const { authUser, username } = this.state;

        this.props.firebase.doUpdateCurrentUser().push({
          username: this.state.authUser.username,
          firstName: this.state.authUser.firstName,
          lastName: this.state.authUser.lastName,
          photoURL: this.state.authUser.photoURL,
          email: this.state.authUser.email,
          address: this.state.authUser.address,
          isReader: this.state.authUser.isReader,
          isAdmin: this.state.authUser.isAdmin,
        });
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        console.log("Update profile Error");
        this.setState({ error });
      });
    e.preventDefault();
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageAsFile = (e) => {
    e.preventDefault();
    const photoURL = e.target.files[0];
  };

  componentWillUnmount() {
    this.props.firebase.userProfile().off();
  }

  render() {
    const {
      username,
      firstName,
      lastName,
      photoURL,
      email,
      address,
      isReader,
      isAdmin,
      error,
    } = this.state;
    console.log(this.props.firebase);
    return (
      <div className="ui grid signupForm">
        <div className="sixteen wide column">
          <div className="four wide column">
            <UploadPhotoUrl />
          </div>
          <AuthUserContext.Consumer>
            {(authUser) => (
              <div className="twelve wide column">
                <h1 className="ui dividing header centered">
                  Profile: {authUser.username}
                </h1>
                <form className="ui form" onSubmit={this.onSubmit}>
                  <h2 className="ui dividing header centered">Avatar</h2>
                  <div className="field">
                    <input
                      type="file"
                      name="photoURL"
                      onChange={this.handleImageAsFile}
                      placeholder="My Photo"
                      onSubmit={() => this.setState({ photoURL })}
                    />
                  </div>
                  <h2 className="ui dividing header centered">First Name</h2>
                  <div className="field">
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={this.onChange}
                      placeholder="First Name"
                    />
                  </div>
                  <h2 className="ui dividing header centered">Last Name</h2>
                  <div className="field">
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={this.onChange}
                      placeholder="Last Name"
                    />
                  </div>
                  <h2 className="ui dividing header centered">Address</h2>
                  <div className="field">
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={this.onChange}
                      placeholder="Address"
                    />
                  </div>
                  <button className="ui teal button">Update </button>
                  {error && <p>{error.message}</p>}
                </form>
                <PasswordChange />
                <div>
                  <br />
                </div>
              </div>
            )}
          </AuthUserContext.Consumer>
        </div>{" "}
      </div>
    );
  }
}
// const AccountPage = () => (
//   <div className="ui grid signupForm">
//     <div className="eight wide column">
//       <AuthUserContext.Consumer>
//         {(authUser) => (
//           <div className="">
//             <h1 className="ui dividing header centered">
//               Profile: {authUser.username}
//             </h1>

//             <div>
//               <PasswordChange />
//               <br />
//             </div>
//           </div>
//         )}
//       </AuthUserContext.Consumer>
//     </div>{" "}
//     <div className="eight wide column">
//       <AuthUserContext.Consumer>
//         {(authUser) => (
//           <div className="">
//             <h1 className="ui dividing header centered">
//               Account: {authUser.email}
//             </h1>

//             <div>
//               <PasswordChange />
//               <br />
//             </div>
//           </div>
//         )}
//       </AuthUserContext.Consumer>
//     </div>
//   </div>
// );

//Set the Authorization condition for account page.
const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition), withFirebase)(AccountPage);
