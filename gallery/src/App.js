import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./utils/routes/routes";
import Header from "./components/Header";
import { AppContext } from "./store/AppContext";
import useCustomContext from "./utils/hooks/useCustomContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./pages/404";
// import firebase from "./config/firebase";

const App = () => {
  const [loggedIn, user, loading] = useCustomContext();
  if (loading) return <Loading />;
  return (
    <Router>
      <AppContext.Provider value={[loggedIn, user]}>
        <Header />
        <Switch>
          {/* <Route exact path="/">
          <Home />
        </Route> */}
          {routes.map((route, i) => {
            // it means if path (link) has /login and again if login then true than redirect to home
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoute
                  key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={i}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
          <Route path="*">
            <NotFound />
          </Route>
          ;
        </Switch>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
