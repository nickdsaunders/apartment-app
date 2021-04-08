import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import apartmentIcon from "../assets/apartment-icon3.png";

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route } = this.props;

    return (
      <div className="header-main">
        <div className="header-logo">
          <img src={apartmentIcon} alt="apartment app icon" className="icon" />
          <h4>NuPlace</h4>
        </div>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/apartmentindex">All Listings</NavLink>
          </NavItem>

          {logged_in && (
            <NavItem>
              <NavLink href={sign_out_route}>Sign out</NavLink>
            </NavItem>
          )}

          {!logged_in && (
            <NavItem>
              <NavLink href={sign_in_route}>Sign In</NavLink>
            </NavItem>
          )}
        </Nav>
      </div>
    );
  }
}

export default Header;
