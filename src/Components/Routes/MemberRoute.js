import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  path,
  match,
  location,
  ...rest
}) => {
  const ok = localStorage.getItem("BWAMICRO:token");

  localStorage.removeItem("BWAMICRO:redirect");

  return (
    <Route
      render={(props) =>
        ok ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`} />
        )
      }
      {...rest}
    />
  );
};

export default withRouter(MemberRoute);
