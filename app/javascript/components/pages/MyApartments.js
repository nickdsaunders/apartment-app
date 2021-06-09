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

class MyApartments extends Component {
  render() {
    return (
      <>
        <Container fluid className="my-apartments-container">
          <h1>My Places</h1>
          <Row sm="4">
            {this.props.myApartments.map((apartment) => {
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
export default MyApartments;
