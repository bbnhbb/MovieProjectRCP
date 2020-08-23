import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function Navbar(props) {
  const [userInfo, setUserInfo] = useState(null);
  let history = useHistory();

  useEffect(() => {
    console.log(firebase.getCurrentUsername());
    setUserInfo((preState) => {
      return {
        name: firebase.getCurrentUsername(),
      };
    });
  }, []);

  function onLogoutClicked() {
    try {
      firebase.logout().then((res) => {
        console.log("logout res");
        history.push("/");
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-film mb-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"
              />
            </svg>
            <span className="pl-2">Movie</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item ml-2">
                <a className="nav-link" onClick={onLogoutClicked}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
