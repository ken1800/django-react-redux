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
import { addLead } from "../../store/actions/leadsActions";

class AddFormLead extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <Container>
          <CardGroup>
            <Card>
              <CardHeader>Add Lead</CardHeader>
              <CardBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      name="name"
                      onChange={this.onChange}
                      value={name}
                      type="text"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      name="email"
                      onChange={this.onChange}
                      value={email}
                      type="email"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Message</Label>
                    <Input
                      name="message"
                      onChange={this.onChange}
                      value={message}
                      type="textarea"
                    />
                  </FormGroup>
                  <Button type="submit" color="success">
                    Add
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}
export default connect(null, { addLead })(AddFormLead);
