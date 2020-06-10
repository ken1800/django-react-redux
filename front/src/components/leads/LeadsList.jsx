import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../store/actions/leadsActions";
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
    deleteLead: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getLeads();
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
                      {this.props.leads.map((lead) => (
                        <tr className="table-success" key={lead.id}>
                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {lead.id}
                            </a>
                          </td>
                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {lead.name}
                            </a>
                          </td>

                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {lead.email}
                            </a>
                          </td>

                          <td>
                            <a
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              {lead.message}
                            </a>
                          </td>

                          <td>
                            <Button
                              color="danger"
                              onClick={this.props.deleteLead.bind(
                                this,
                                lead.id
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
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
