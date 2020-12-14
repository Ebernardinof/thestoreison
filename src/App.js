import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PasswordForget from "./components/PasswordForget";
import Home from "./components/Home";
import Account from "./components/Account";
import Admin from "./components/admin/Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminChart from "./components/admin/AdminChart";

import * as ROUTES from "./constants/routes";
import { withAuthentication } from "././components/session";
import { AdminStatistics } from "./components/admin/AdminStatistics";
// import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <div className="container ">
      {/* <div> */}
      <Navigation />
      {/* </div> */}
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ACCOUNT} component={Account} />
      <Route exact path={ROUTES.ADMIN} component={Admin} />
      <Route exact path={ROUTES.ADMINDASHBOARD} component={AdminDashboard} />
      <Route exact path={ROUTES.ADMINSTATISTICS} component={AdminStatistics} />
      <Route exact path={ROUTES.ADMINCHART} component={AdminChart} />
    </div>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default withAuthentication(App);
