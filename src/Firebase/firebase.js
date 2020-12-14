//   appId: "1:874465774182:web:37a85e95eca32ad0513ba7",
//   measurementId: "G-KB63KJG96S",
// };

import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.storage = app.storage();
  }

  //Auth api
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //Sign Out
  doSignOut = () => this.auth.signOut();
  //Reset Password
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  //Update email
  doUpdateEmail = (email) => this.auth.updateEmail(email);
  // Update Password
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  doUpdateCurrentUser = (
    username,
    firstName,
    lastName,
    photoURL,
    email,
    address,
    isReader,
    isAdmin
  ) =>
    this.auth.currentUser.updateProfile(
      username,
      firstName,
      lastName,
      photoURL,
      email,
      address,
      isReader,
      isAdmin
    );

  //User Api
  user = (uid) => this.db.ref(`users/${uid}`);
  //user update profile
  userProfile = (uid) => this.db.ref(`users/profile/${uid}`);
  users = () => this.db.ref("users");
  // User chat
  chats = () => this.db.ref(`chats/`);
  // user photo upload
  photoUpload = (uid) => this.storage.ref(`profile-photo/${uid}`);

  //Google Oauth

  doSignInWithPopup = () => {
    const provider = new app.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    console.log(provider);
    return this.auth.signInWithRedirect(provider);
  };

  //Merge Auth and db User Api
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            //default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }
            //merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });
}

export default Firebase;
