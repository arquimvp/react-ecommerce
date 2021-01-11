import React from "react";
import { Switch, Route } from "react-router-dom";

import WelcomePage from "./pages/welcome/welcome.component";
import ShoppingPage from "./pages/shopping/shopping.component";

import Header from "./components/header/header.component";

class App extends React.Component {
  componentDidMount() {
    console.log("react works via webpack from scratch...");
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/shopping" component={ShoppingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
