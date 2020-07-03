import React, { Component, PureComponent } from "react";
import {
  Container,
  Card,
  Input,
  Label,
  Form,
  FormGroup,
  CardBody,
  CardHeader,
  CardGroup,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginStarting } from "../../store/actions/authActions";

class Login extends PureComponent {
  state = {
    username: "",
    password: "",
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  onSubmit = (e) => {
    // e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const user = { username, password };
    this.props.loginStarting(user);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    console.log("loginComponent Rendering ..................");
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      name="username"
                      type="text"
                      onChange={this.onChange}
                      value={username}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      name="password"
                      type="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </FormGroup>
                  <Button type="submit" color="success">
                    Login
                  </Button>
                  <br />
                  <br />
                  <p>
                    Dont have an account? <Link to="/register">Register</Link>
                  </p>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loginStarting })(Login);
