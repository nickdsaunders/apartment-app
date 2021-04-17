import React, { Component } from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class ApartmentShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handleSubmit = () => {
    this.props.deleteApartment(this.props.apartment.id);
    this.setState({ submitted: true });
  };

  render() {
    const { apartment } = this.props;

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

        <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
          <Button color="secondary">Edit Listing</Button>
        </NavLink>

        <a href="/apartmentindex">
          <Button color="secondary" onClick={this.handleSubmit}>
            Delete Listing
          </Button>
        </a>
      </>
    );
  }
}

export default ApartmentShow;
