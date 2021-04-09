import React, { Component } from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";

class ApartmentShow extends Component {
  render() {
    const apartment = this.props.apartment;

    return (
      <>
        <h1>Apartment Info</h1>
        <div>{apartment.title}</div>
        <div>Street: {apartment.street}</div>
        <div>City: {apartment.city}</div>
        <div>State: {apartment.state}</div>
        <div>Manager: {apartment.manager}</div>
        <div>Email: {apartment.email}</div>
        <div>Price: {apartment.price}</div>
        <div>Bedrooms: {apartment.bedrooms}</div>
        <div>Bathrooms: {apartment.bathrooms}</div>
        <div>pets: {apartment.pets}</div>
        <img className="img-show" src={apartment.img} />

        <NavLink href={`/apartmentedit/${this.props.apartment.id}`}>
          <Button color="secondary">Edit Listing</Button>
        </NavLink>
      </>
    );
  }
}

export default ApartmentShow;
