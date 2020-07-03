import React, { PureComponent, Fragment } from "react";
import AddFormLead from "./AddLeadForm";
import Leads from "./LeadsList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Dashboard extends PureComponent {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />;
    }
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Dashboard);
