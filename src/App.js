import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import Top from "./components/Top";
import Recipe from "./components/Recipe";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Top />
        <Recipe />
      </div>
    );
  }
}

export default App;
