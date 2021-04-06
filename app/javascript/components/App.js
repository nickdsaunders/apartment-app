import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FindApartments from "./pages/FindApartments";
import AddApartment from "./pages/AddApartment";
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props;
    return (
      <div>
        <Router>
          <Header
            logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            {logged_in && (
              <Route path="/addapartment" component={AddApartment} />
            )}

            <Route exact path="/findapartments" component={FindApartments} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
