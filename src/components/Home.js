import React from "react";

import { withAuthorization } from "./session";

const Home = () => (
  <div>
    <h1>HOME</h1>
    <p>The home page is accessible by evry signed in users</p>
  </div>
);

const condition = (authUser) => !!authUser;
export default withAuthorization(Home);
