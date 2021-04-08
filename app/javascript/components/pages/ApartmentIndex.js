import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
      <>
        <h1>Apartment Listings</h1>
        <ul>
          {this.props.apartments.map((apartment) => {
            return (
              <li key={apartment.id}>
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  {apartment.street}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ApartmentIndex;
