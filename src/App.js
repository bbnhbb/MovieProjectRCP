import React, { useState } from "react";
import ReactDOM from "react-dom";
import Detail from "./Detail";
import FirstPage from "./FirstPage";
import Search from "./Search";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const LoginContainer = () => (
    <React.Fragment>
      <Route path="/" exact component={FirstPage} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
    </React.Fragment>
  );

  const DefaultContainer = () => (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Route path="/Search" exact component={Search} />
        <Route path="/Detail/:id" component={Detail} />
        <Route path="/Favorites" component={Favorites} />
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={LoginContainer} />
              <Route path="/Register" component={LoginContainer} />
              <Route path="/Login" component={LoginContainer} />
              <Route component={DefaultContainer} />
            </Switch>
          </div>
        </Router>
      </StateProvider>
    </React.Fragment>
  );
}

export default App;
