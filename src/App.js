import "assets/css/style.css";
import { GuestRoute, MemberRoute } from "Components/Routes";
import { setAuthorization } from "configs/axios";
import { users } from "consts";
import { createBrowserHistory } from "history";
import {
  DetailsClass,
  Joined,
  Login,
  MyClass,
  NotFound,
  Register,
  Settings,
  Unauthenticated,
  Transactions,
} from "pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { populateProfile } from "store/actions";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWAMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"));
      setAuthorization(session.token);

      users.details().then((detail) => dispatch(populateProfile(detail.data)));
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unauthenticated} />

          <MemberRoute path="/" component={MyClass} exact />
          <MemberRoute path="/settings" component={Settings} />
          <MemberRoute path="/transactions" component={Transactions} />
          <MemberRoute path="/joined/:class" component={Joined} exact />
          <MemberRoute path="/courses/:class" component={DetailsClass} exact />
          <MemberRoute
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
            exact
          />

          <Route path="/*" component={NotFound} />
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
