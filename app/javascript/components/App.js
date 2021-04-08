import React, { Component } from "react";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import Header from "./components/Header";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mockApartments from "./mockApartments.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: mockApartments
    };
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props;
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          // sign_up_route={sign_up_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/apartmentindex"
            render={(props) => (
              <ApartmentIndex apartments={this.state.apartments} />
            )}
          />
          <Route
            exact
            path="/apartmentshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let apartment = this.state.apartments.find(
                (apartment) => apartment.id === parseInt(id)
              );
              return <ApartmentShow apartment={apartment} />;
            }}
          />

          <Route path="/apartmentnew" component={ApartmentNew} />
        </Switch>
      </Router>
    );
  }
}

export default App;
