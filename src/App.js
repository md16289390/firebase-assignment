import React from "react";

import { Switch } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./AppRoute/PrivateRoute";
import NonPrivateRoute from "./AppRoute/NonPrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <PrivateRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <NonPrivateRoute
        exact
        path="/login"
        component={Login}
        isAuthenticated={isAuthenticated}
      />
      <NonPrivateRoute
        exact
        path="/signup"
        component={Signup}
        isAuthenticated={isAuthenticated}
      />
      <NonPrivateRoute
        exact
        path="*"
        component={NotFound}
        // isAuthenticated={isAuthenticated}
      />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
