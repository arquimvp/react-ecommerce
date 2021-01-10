import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    console.log("react works via webpack from scratch...");
  }

  render() {
    return <div>Hello!</div>;
  }
}

export default App;
