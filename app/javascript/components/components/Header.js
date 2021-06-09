import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import apartmentIcon from "../assets/apartment-icon3.png";

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route, new_user_route } =
      this.props;

    return (
      <div className="header-container">
        <NavLink href="/">
          <div className="logo-container">
            <img
              src={apartmentIcon}
              alt="apartment app icon"
              className="icon"
            />
            <h3 className="text">NuPlace</h3>
          </div>
        </NavLink>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/apartmentindex">All Places</NavLink>
          </NavItem>

          {logged_in && (
            <NavItem>
              <NavLink href="/myapartments">My Places</NavLink>
            </NavItem>
          )}

          {!logged_in && (
            <NavItem>
              <NavLink href={sign_in_route}>Sign In</NavLink>
            </NavItem>
          )}

          {!logged_in && (
            <NavItem>
              <NavLink href={new_user_route}>Sign Up</NavLink>
            </NavItem>
          )}

          {logged_in && (
            <NavItem>
              <NavLink href="/apartmentnew">Add Place</NavLink>
            </NavItem>
          )}

          {logged_in && (
            <NavItem>
              <NavLink href={sign_out_route}>Sign out</NavLink>
            </NavItem>
          )}
        </Nav>
      </div>
    );
  }
}

export default Header;
