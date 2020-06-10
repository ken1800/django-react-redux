import React, { Component, Fragment } from "react";
import AddFormLead from "./AddLeadForm";
import Leads from "./LeadsList";
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <AddFormLead />
          <br />
          <Leads />
        </div>
      </Fragment>
    );
  }
}
export default Dashboard;
