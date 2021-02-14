import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../Firebase";

const SignUp = ({ history }) => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, username } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
        db.collection("users").add({
          fullname: username.value,
          email: email.value,
          edupoints: 0,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Username
          <input name="username" type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
