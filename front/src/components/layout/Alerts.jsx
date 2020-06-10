import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    //instead of wrinting this.props.error we have distructured the code
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email Field: ${error.msg.email.join()}`);
      }
      if (error.msg.detail) {
        alert.error("Kindly Login");
      }
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
    //addedLead
    if (message !== prevProps.message) {
      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addedLead) alert.success(message.addedLead);
      if (message.addLead) alert.success(message.addLead);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return (
      <div>
        <Fragment />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.message,
});

export default connect(mapStateToProps, {})(withAlert()(Alerts));
//
