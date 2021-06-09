import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <Container fluid className="apartment-index-container">
          <h1>Places For Rent</h1>
          <Row sm="4">
            {this.props.apartments.map((apartment) => {
              return (
                <Col key={apartment.id} sm="4">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">{apartment.title} </CardTitle>
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
