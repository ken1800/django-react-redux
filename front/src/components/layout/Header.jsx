import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../store/actions/authActions";
class Header extends Component {
  state = {
    collapsed: false,
  };
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  setCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const isNotAuth = (
      <div>
        <NavItem>
          <Link to="/register">Register</Link>
        </NavItem>

        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
      </div>
    );

    const isauth = (
      <div>
        <span className="navbar-text mr-3">
          <strong>
            {this.props.user ? `Welcome ${this.props.user.username}` : null}
          </strong>
          <NavItem>
            <Button onClick={this.props.logout} color="danger">
              Logout
            </Button>
          </NavItem>
        </span>
      </div>
    );

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            LeadManager
          </NavbarBrand>

          <NavbarToggler onClick={this.setCollapsed} className="mr-2" />

          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>{!this.props.isAuthenticated ? isNotAuth : null}</Nav>
            {this.props.isAuthenticated ? isauth : null}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, { logout })(Header);
