import React, { useState } from "react";
import firebase from "./firebase";
import Model from "./Model";

function Register(props) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showModel, setShowModel] = useState(false);
  // const [showProgressBar, setShowProgressBar] = useState(false);

  async function onRegisterClicked(e) {
    e.preventDefault();
    // toggleShowProgressBar();
    try {
      await firebase.register(userName, email, password);
      toggleModal();
    } catch (e) {
      console.log(e);
    }
  }

  const toggleModal = () => {
    setShowModel((value) => !value);
  };

  const redirectToApplication = () => {
    setShowModel((value) => !value);
    props.history.replace("/Search");
    // toggleShowProgressBar();
  };

  // const toggleShowProgressBar = () => {
  //   setShowProgressBar((value) => !value);
  // };

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
            <div classname="modal" tabindex="-1" role="dialog">
              <div classname="modal-dialog" role="document">
                <div classname="modal-content">
                  <div classname="modal-body">
                    <p>You have registered successfully.</p>
                  </div>
                  <div classname="modal-footer">
                    <button
                      type="button"
                      classname="btn btn-primary"
                      onClick={redirectToApplication}
                    >
                      Get In.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Model>
      ) : null}

      {/* {showProgressBar ? (
        <Model>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 100%"
            ></div>
          </div>
        </Model>
      ) : null} */}
    </div>
  );
}

export default Register;
