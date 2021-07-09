import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import apartmentIcon from '../assets/apartment-icon3.png';
import Home from '../pages/Home';

class Header extends Component {
  render() {
    const { logged_in, sign_in_route, sign_out_route, new_user_route } =
      this.props;

    // console.log(logged_in);

    // const isLoggedIn = logged_in;
    // console.log(isLoggedIn);

    // const links = [
    //   {
    //     href: '/',
    //     text: 'Home'
    //   },
    //   {
    //     href: '/apartmentindex',
    //     text: 'All Places'
    //   },
    //   {
    //     href: '/myapartments',
    //     text: 'My Places'
    //   },
    //   {
    //     href: '/apartmentnew',
    //     text: 'Add Place'
    //   },
    //   {
    //     href: sign_out_route,
    //     text: 'Sign Out'
    //   }
    // ];

    // const notLinks = [
    //   {
    //     href: '/',
    //     text: 'Home'
    //   },
    //   {
    //     href: '/apartmentindex',
    //     text: 'All Places'
    //   },
    //   {
    //     href: sign_in_route,
    //     text: 'Sign In'
    //   },
    //   {
    //     href: new_user_route,
    //     text: 'Sign Up'
    //   }
    // ];

    const links = [
      {
        href: '/',
        text: 'Home',
        isLoggedIn: 'both'
      },
      {
        href: '/apartmentindex',
        text: 'All Places',
        isLoggedIn: 'both'
      },
      {
        href: sign_in_route,
        text: 'Sign In',
        isLoggedIn: false
      },
      {
        href: new_user_route,
        text: 'Sign Up',
        isLoggedIn: false
      },
      {
        href: '/myapartments',
        text: 'My Places',
        isLoggedIn: true
      },
      {
        href: '/apartmentnew',
        text: 'Add Place',
        isLoggedIn: true
      },
      {
        href: sign_out_route,
        text: 'Sign Out',
        isLoggedIn: true
      }
    ];

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
          {/* {logged_in
            ? links.map((link, index) => (
                <NavItem key={index}>
                  <NavLink href={link.href}>{link.text}</NavLink>
                </NavItem>
              ))
            : notLinks.map((link, index) => (
                <NavItem key={index}>
                  <NavLink href={link.href}>{link.text}</NavLink>
                </NavItem>
              ))} */}

          {logged_in &&
            links
              .filter(
                (link) => link.isLoggedIn === true || link.isLoggedIn === 'both'
              )
              .map((filteredLinks, index) => (
                <NavItem key={index}>
                  <NavLink href={filteredLinks.href}>
                    {filteredLinks.text}
                  </NavLink>
                </NavItem>
              ))}
        </Nav>
      </div>
    );
  }
}

export default Header;
