import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";

const GuestRoute = ({ component: Component, match, location, ...rest }) => {
  const ok = localStorage.getItem("BWAMICRO:token");
  const params = location?.search.substring(1).split("&");
  const path = params.find((item) => item.indexOf("path") > -1);
  const redirect = path?.split("=")?.[1];

  if (!ok && redirect) localStorage.getItem("BWAMICRO:redirect", redirect);

  return (
    <Route
      render={(props) =>
        ok ? <Redirect to={`/`} /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

export default withRouter(GuestRoute);
