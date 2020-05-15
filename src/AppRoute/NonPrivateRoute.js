import React from "react";
import { Route, Redirect } from "react-router-dom";

const NonPrivateRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default NonPrivateRoute;
