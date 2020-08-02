import React, { useState } from "react";
import firebase from "./firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLoginClicked(e) {
    e.preventDefault();
    try {
      await firebase.login(email, password);
      props.history.replace("/Search");
    } catch (e) {
      console.log(e);
      if (e["code"] === "auth/user-not-found") {
        alert("User not found, please register your self first");
      }
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onLoginClicked}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
