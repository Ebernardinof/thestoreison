import React, { Suspense } from "react";
import "./i18n";
import ReactDOM from "react-dom";
import App from "./App";

import i18next from "i18next";
import * as serviceWorker from "./serviceWorker";

import Firebase, { FirebaseContext } from "./Firebase";

require("dotenv").config();

const lang = localStorage.getItem("lang") || "en";
i18next.changeLanguage(lang);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
