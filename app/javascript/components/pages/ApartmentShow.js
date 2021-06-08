import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  List
} from "reactstrap";
import { Link } from "react-router-dom";

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
    const {
      title,
      street,
      city,
      state,
      manager,
      email,
      price,
      bedrooms,
      bathrooms,
      pets,
      img,
      id,
      user_id
    } = this.props.apartment;

    const { current_user } = this.props;

    return (
      <>
        <Container width="75%">
          <Card>
            <img height="75%" src={img} alt="apartment image" />
            <CardBody>
              <CardTitle tag="h2">{title} </CardTitle>
              <Row>
                <Col>
                  <List type="unstyled">
                    <ul>
                      <li style={{ fontSize: "20px" }}>
                        {street}, {city}, {state}
                      </li>
                      <li style={{ fontSize: "20px" }}>$ {price} / month</li>
                    </ul>
                  </List>
                </Col>
              </Row>
              <Row>
                <Col>
                  <List type="unstyled">
                    <li style={{ fontSize: "30px" }}>
                      Amenities:
                      <ul>
                        <li style={{ fontSize: "20px" }}>
                          Bedrooms: {bedrooms}
                        </li>
                        <li style={{ fontSize: "20px" }}>
                          Bathrooms: {bathrooms}
                        </li>
                        <li style={{ fontSize: "20px" }}>Pets: {pets}</li>
                      </ul>
                    </li>
                  </List>
                </Col>
                <Col>
                  <List type="unstyled">
                    <li style={{ fontSize: "30px" }}>
                      Contact:
                      <ul>
                        <li style={{ fontSize: "20px" }}>Manager: {manager}</li>
                        <li style={{ fontSize: "20px" }}>E-mail: {email}</li>
                      </ul>
                    </li>
                  </List>
                </Col>
              </Row>
              {current_user.id === user_id && (
                <Link to={`/apartmentedit/${id}`}>Edit Listing</Link>
              )}
              {current_user.id === user_id && (
                <Link onClick={this.handleSubmit} to={"/apartmentindex/"}>
                  Delete
                </Link>
              )}
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

export default ApartmentShow;
