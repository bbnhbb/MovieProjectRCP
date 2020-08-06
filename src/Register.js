import React, { useState } from "react";
import firebase from "./firebase";
import Model from "./Model";

function Register(props) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showModel, setShowModel] = useState(false);

  async function onRegisterClicked(e) {
    e.preventDefault();
    try {
      await firebase.register(userName, email, password);
      toggleModal();
      props.history.replace("/Search");
    } catch (e) {
      console.log(e);
    }
  }

  const toggleModal = () => {
    setShowModel(true);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={onRegisterClicked}
        >
          Submit
        </button>
      </form>
      {showModel ? (
        <Model>
          <div>
            <h1>You are register successfully</h1>
            <div className="button">Ok</div>
          </div>
        </Model>
      ) : null}
    </div>
  );
}

export default Register;
