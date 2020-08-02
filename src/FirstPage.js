import React from "react";
import firebase from "./firebase";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

function FirstPage(props) {
  async function onRegisterClicked() {
    try {
      await firebase.register("bharth", "bbnhbb@gmail.com", "bhushan78");
      props.history.replace("/Search");
    } catch (e) {
      console.log(e);
    }
  }

  function onLogoutClicked() {
    try {
      firebase.logout().then((res) => {
        console.log("logout res");
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="register-container mt-4">
      <label>Login or Register to proceed further</label>
      <Link
        className="btn btn-warning mt-4"
        to="/Register"
        style={{ color: "#000" }}
        // onClick={onRegisterClicked}
      >
        Register
      </Link>
      <Link
        className="btn btn-dark mt-4"
        to="/Login"
        // onClick={onLoginClicked}
      >
        Login
      </Link>
      {/* <button onClick={onLogoutClicked}>Logout</button> */}
      {/* <button onClick={userInfo}>User Info</button> */}
    </div>
  );
}

export default FirstPage;
