import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Login}
      />
      <Route
        exact
        path="*"
        component={NotFound}
      />
    </Switch>
  );
}

export default App;
