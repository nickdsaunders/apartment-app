import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class ApartmentEdit extends Component {
  constructor(props) {
    console.log('props', props);
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
    console.log('title', title);
    console.log('form', this.state);

    const { apartment } = this.props;
    console.log('apartment', apartment);

    return (
      <>
        <Container fluid className="apartment-form-container">
          <h3>Edit Your Place</h3>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={title}
                placeholder={apartment.title}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                type="text"
                name="street"
                value={street}
                placeholder={apartment.street}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                value={city}
                placeholder={apartment.city}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                value={state}
                placeholder={apartment.state}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="manager">Manager's Name</Label>
              <Input
                type="text"
                name="manager"
                value={manager}
                placeholder={apartment.manager}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Contact Email</Label>
              <Input
                type="text"
                name="email"
                value={email}
                placeholder={apartment.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Monthly Rent</Label>
              <Input
                type="text"
                name="price"
                value={price}
                placeholder={apartment.price}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bedrooms">Number of Bedrooms</Label>
              <Input
                type="number"
                name="bedrooms"
                value={bedrooms}
                placeholder={apartment.bedrooms}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bathrooms">Number of Bathrooms</Label>
              <Input
                type="number"
                name="bathrooms"
                value={bathrooms}
                placeholder={apartment.bathrooms}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pets">Are Pets Allowed?</Label>
              <Input
                type="select"
                name="pets"
                value={pets}
                placeholder={apartment.pets}
                onChange={this.handleChange}>
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="img">Photo</Label>
              <Input
                type="string"
                name="img"
                value={img}
                placeholder={apartment.img}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit Changes</Button>
          </Form>
        </Container>
        {this.state.submitted && (
          <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />
        )}
      </>
    );
  }
}

export default ApartmentEdit;
