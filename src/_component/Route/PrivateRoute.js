import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Route/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  console.log("route: " + authTokens);
  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
