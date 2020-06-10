import React, { Component } from "react";
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
import { connect } from "react-redux";
import { register } from "../../store/actions/authActions";
import { createMessage } from "../../store/actions/messages";

import { Link, Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2 } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Register</CardHeader>
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
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      onChange={this.onChange}
                      value={email}
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
                  <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      name="password2"
                      type="password"
                      onChange={this.onChange}
                      value={password2}
                    />
                  </FormGroup>
                  <Button type="submit" color="success">
                    Register
                  </Button>
                  <br />
                  <br />
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
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

export default connect(mapStateToProps, { register, createMessage })(Register);
