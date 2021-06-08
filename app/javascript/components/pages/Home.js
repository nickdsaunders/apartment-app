import React, { Component } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron className="home-hero-container" fluid>
          <Container className="home-hero-content" fluid>
            <h1 className="hero-h1">NuPlace</h1>
            <h3 className="hero-h3">Your new place is waiting</h3>
            <hr className="my-2" />
            <NavLink to={"/apartmentindex/"}>
              <Button color="primary">See Listings</Button>
            </NavLink>
          </Container>
        </Jumbotron>
      </>
    );
  }
}
export default Home;
