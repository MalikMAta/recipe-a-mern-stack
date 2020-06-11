import React, { Component } from "react";

import AppNavBar from "./components/AppNavBar";
import Top from "./components/Top";
import Recipe from "./components/Recipe";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      // Provider allows to share atate between components It proovides it
      <Provider store={store}>
        <div>
          <AppNavBar />
          <Top />
          <Recipe />
        </div>
      </Provider>
    );
  }
}

export default App;
