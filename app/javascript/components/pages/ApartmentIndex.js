import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Row,
  Col,
  Container
} from "reactstrap";

import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
      <>
        <h1>Apartment Listings</h1>
        <Container fluid>
          <Row sm="4">
            {this.props.apartments.map((apartment) => {
              return (
                <Col key={apartment.id} sm="4">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">{apartment.title} </CardTitle>
                      {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {apartment.bedrooms} Bed {apartment.bathrooms} Bath
                      </CardSubtitle> */}
                    </CardBody>
                    <img
                      width="100%"
                      src={apartment.img}
                      alt="apartment image"
                    />
                    <CardBody>
                      <CardText>
                        {apartment.bedrooms} Bed {apartment.bathrooms} Bath
                        <br />
                        {apartment.street}
                        <br />
                        {apartment.city}, {apartment.state}
                        <br />${apartment.price} / Month
                      </CardText>
                      <NavLink to={`/apartmentshow/${apartment.id}`}>
                        See More Info
                      </NavLink>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default ApartmentIndex;

// {this.props.apartments.map((apartment) => {
//   return (
//     <li key={apartment.id}>
//       <NavLink to={`/apartmentshow/${apartment.id}`}>
//         {apartment.title}
//         <img src={apartment.img} />
//       </NavLink>
//     </li>
//   );
// })}
