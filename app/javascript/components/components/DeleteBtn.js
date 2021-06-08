import React, { Component } from "react";

class DeleteBtn extends Component {
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
    return (
      <a href="/apartmentindex">
        <Button color="secondary" onClick={this.handleSubmit}>
          Delete Listing
        </Button>
      </a>
    );
  }
}

export default DeleteBtn;
