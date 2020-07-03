import React, { Component, PureComponent, Fragment } from "react";
import Dashboard from "./components/leads/Dashboard";
import Header from "./components/layout/Header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Alerts from "./components/layout/Alerts";
import Login from "./components/accounts/Login";
import { loadUserStart } from "./store/actions/authActions";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import { connect } from "react-redux";

class App extends PureComponent {
  componentDidMount() {
    console.log("App component rendering................");
    const { loadUserStart } = this.props;
    loadUserStart();
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
              <Route exact path="/" component={Dashboard} />{" "}
              <Route exact path="/login" component={Login} />{" "}
              <Route exact path="/register" component={Register} />{" "}
            </Switch>{" "}
          </div>{" "}
        </Router>{" "}
      </Fragment>
    );
  }
}
export default connect(null, { loadUserStart })(App);
