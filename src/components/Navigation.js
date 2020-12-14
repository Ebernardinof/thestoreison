import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import * as ROLES from "../constants/roles";
import SignOutButton from "./SignOut";
import GoogleButton from "./GoogleLogin";
import { AuthUserContext } from "./session/";
import "../App.css";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <div className="ui top fixed inverted menu">
    <a href="#" className="sidebar-menu-toggler item" data-target="#sidebar">
      <i className="sidebar icon"></i>
    </a>
    <Link to={ROUTES.LANDING} className="link header item">
      TheStoreIsOn
    </Link>
    <div className="right menu">
      <div className="item">
        <Link to={ROUTES.HOME} className="link">
          <i className="bell icon"></i>
          Home
        </Link>
      </div>
      <div className="item">
        <Link to={ROUTES.ACCOUNT} className="link">
          <i className="user circle icon"></i>
          My Account
        </Link>
      </div>
      <div className="item">
        {!!authUser.roles[ROLES.ADMIN] && (
          <Link to={ROUTES.ADMIN} className="link">
            Admin
          </Link>
        )}
      </div>
      <div className="ui item">
        <SignOutButton />
      </div>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className="ui top fixed inverted menu">
    <a href="#" className="sidebar-menu-toggler item" data-target="#sidebar">
      <i className="sidebar icon"></i>
    </a>
    <Link to={ROUTES.LANDING} className="link header item">
      TheStoreIsOn
    </Link>

    <div className="right menu">
      <div className="ui item">
        <Link to={ROUTES.SIGN_IN} className="link">
          Sign In
        </Link>
      </div>
      <div className="ui item">
        <Link to={ROUTES.SIGN_UP} className="link">
          Sign Up
        </Link>
      </div>
      <div className="ui item">
        <GoogleButton />
      </div>
    </div>
  </div>
);

export default Navigation;
