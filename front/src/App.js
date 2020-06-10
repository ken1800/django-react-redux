import React, { Component, Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Header from "./components/layout/Header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Alerts from "./components/layout/Alerts";
import Login from "./components/accounts/Login";
import store from "./store/store/store";
import { loadUser } from "./store/actions/authActions";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/common/PrivateRoute";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Header />
            <Alerts />
            <br />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
export default App;
