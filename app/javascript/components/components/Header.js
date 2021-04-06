import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <h1>This is a React Component</h1>
            <Nav>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/findapartments">Find Apartment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/addapartment">Add Apartment</NavLink>
              </NavItem>

              {!this.props.logged_in && (
                <NavItem>
                  <NavLink href={props.sign_in_route}>Sign In</NavLink>
                </NavItem>
              )}

              {this.props.logged_in && (
                <NavItem>
                  <NavLink href={props.sign_out_route}>Sign out</NavLink>
                </NavItem>
              )}
            </Nav>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
