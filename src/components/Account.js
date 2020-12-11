import React from "react";
// import logo from "../logo.svg";

import PasswordChange from "./PasswordChange";
import { PasswordForgetForm } from "./PasswordForget";

import { AuthUserContext, withAuthorization } from "./session";

// export const Account = () => (
//   <AuthUserContext.Consumer>
//     {(authUser) => (
//       <div className="ui grid signupForm">
//         {" "}
//         <img
//           className="ui medium left floated circular image"
//           src={logo}
//           alt="logo"
//         ></img>
//         <div className="ui form signupForm">
//           {/* <div className="fields"> */}
//           <h2 className="ui dividing header centered">
//             Your Account {console.log(authUser.email)}
//           </h2>
//           <div></div>
//           {/* <div className="field ">
//         <label htmlFor="username">Change Email Address</label>
//         <input type="text" name="username" id="username" />

//         <input
//           type="submit"
//           name="change-email-submit"
//           id="change-email-submit"
//           value="Change Email"
//           className="ui teal button"
//         />
//       </div> */}
//           <h2>Change Password</h2>
//           <PasswordChange />
//           <br />
//         </div>
//         <PasswordForgetForm />
//         {/* </div> */}
//       </div>
//     )}
//   </AuthUserContext.Consumer>
// );
// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(Account);

const AccountPage = () => (
  <div className="ui grid signupForm">
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="">
          <h1 className="ui dividing header centered">
            Account: {authUser.email}
          </h1>

          <div>
            <PasswordChange />
            <PasswordForgetForm />
            <br />
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

//Set the Authorization condition for account page.
const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
