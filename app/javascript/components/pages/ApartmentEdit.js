import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: this.props.title,
        street: this.props.street,
        city: this.props.city,
        state: this.props.state,
        manager: this.props.manager,
        email: this.props.email,
        price: this.props.price,
        bedrooms: this.props.bedrooms,
        bathrooms: this.props.bathrooms,
        pets: this.props.pets,
        img: this.props.img,
        user_id: this.props.current_user.id
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateApartment(this.state.form, this.props.apartment.id);
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
      bedrooms,
      bathrooms,
      price,
      pets,
      img
    } = this.state.form;

    return (
      <>
        <Row>
          <Col sm={{ size: 5, order: 2, offset: 3 }}>
            <h2>Edit Listing</h2>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder={title}
                  value={title}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="street">Street</Label>
                <Input
                  type="text"
                  name="street"
                  value={street}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  value={state}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="manager">Manager's Name</Label>
                <Input
                  type="text"
                  name="manager"
                  value={manager}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Contact Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Monthly Rent</Label>
                <Input
                  type="text"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bedrooms">Number of Bedrooms</Label>
                <Input
                  type="number"
                  name="bedrooms"
                  value={bedrooms}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bathrooms">Number of Bathrooms</Label>
                <Input
                  type="number"
                  name="bathrooms"
                  value={bathrooms}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pets">Are Pets Allowed?</Label>
                <Input
                  type="select"
                  name="pets"
                  value={pets}
                  onChange={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="img">Photo</Label>
                <Input
                  type="text"
                  name="img"
                  value={img}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button onClick={this.handleSubmit}>Submit Changes</Button>
            </Form>
          </Col>
        </Row>
        {this.state.submitted && (
          <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />
        )}
      </>
    );
  }
}

export default ApartmentEdit;
