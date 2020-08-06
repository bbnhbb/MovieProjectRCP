import React from "react";
import firebase from "./firebase";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

function FirstPage(props) {
  return (
    <div className="register-container mt-4">
      <label>Login or Register to proceed further</label>
      <Link
        className="btn btn-warning mt-4"
        to="/Register"
        style={{ color: "#000" }}
      >
        Register
      </Link>
      <Link className="btn btn-dark mt-4" to="/Login">
        Login
      </Link>
    </div>
  );
}

export default FirstPage;
