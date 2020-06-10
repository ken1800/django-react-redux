import React, { Component } from "react";
import {
  Collapse,
  Container,
  Card,
  Input,
  Label,
  Form,
  FormGroup,
  CardBody,
  CardHeader,
  CardGroup,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

class App extends Component {
  state = {
    collapsed: false,
  };

  setCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            LeadManager
          </NavbarBrand>
          <NavbarToggler onClick={this.setCollapsed} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input name="title" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input name="content" type="password" />
                  </FormGroup>
                  <Button color="success">Login</Button>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
        <br />
        <br />
        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Add Lead</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input name="title" type="text" required />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input name="content" type="email" required />
                  </FormGroup>
                  <FormGroup>
                    <Label>Message</Label>
                    <Input name="title" type="textarea" />
                  </FormGroup>
                  <Button color="success">Add</Button>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
        <br />
        <br />
        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Leads Table</CardHeader>
              <CardBody>
                <table className="table table-bordered">
                  <tbody className="thead-light">
                    <tr>
                      <th scope="col" className="thead-dark">
                        name
                      </th>
                      <th scope="col" className="thead-dark">
                        Email
                      </th>
                      <th scope="col" className="thead-dark">
                        Message
                      </th>
                      <th scope="col" className="thead-dark">
                        Delete
                      </th>
                    </tr>

                    <tr className="table-success">
                      <td>
                        {" "}
                        <a
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          kenneth irungu
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          kennethirungu@gmail.com
                        </a>
                      </td>
                      <td>
                        {" "}
                        <a
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          hello there
                        </a>
                      </td>

                      <td>
                        <a
                          className="btn btn-danger btn-sm"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}

export default App;
