import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getLeads,
  getLeadStart,
  deleteLeadStart,
} from "../../store/actions/leadsActions";
import { getToken } from "../../store/actions/tokenSelector";
import PropTypes from "prop-types";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardGroup,
  Button,
} from "reactstrap";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeadStart: PropTypes.func.isRequired,
  };
  state = {
    id: null,
    Token: null,
  };
  componentDidMount() {
    const { getLeadStart, Token } = this.props;
    // I USED THIS METHOD OF GETTING MY TOKEN USING THE SELECTOR BEFORE I KNEW ABOUT THE select() API IN REDUX SAGA
    getLeadStart();
    this.setState({
      Token: Token,
    });
  }
  sendData(id) {
    const tok = this.state.Token;
    const data = { id, tok };
    this.props.deleteLeadStart(data);
  }
  render() {
    return (
      <Fragment>
        <div>
          <Container>
            <CardGroup>
              <Card>
                <CardHeader>Leads Table</CardHeader>
                <CardBody>
                  <table className="table table-bordered">
                    <tbody className="thead-light">
                      <tr>
                        <th scope="col" className="thead-dark">
                          Id
                        </th>
                        <th scope="col" className="thead-dark">
                          Name
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
                      {this.props.leads.map(({ id, name, email, message }) => (
                        <tr className="table-success" key={id}>
                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {id}
                            </a>
                          </td>
                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {name}
                            </a>
                          </td>

                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {email}
                            </a>
                          </td>

                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {message}
                            </a>
                          </td>

                          <td>
                            <Button
                              color="danger"
                              type="button"
                              // onClick={(id) => this.props.deleteLeadStart(id)}
                              onClick={this.sendData.bind(
                                this,
                                id,
                                this.state.Token
                              )}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  leads: state.leads.leads,
  Token: getToken(state),
});

export default connect(mapStateToProps, { getLeadStart, deleteLeadStart })(
  Leads
);
