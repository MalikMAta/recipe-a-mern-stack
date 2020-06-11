import React, { useState, Component } from "react";

class AppNavBar extends Component {
  render() {
    return (
      <div style={divStyle} className="topHeader">
        <h2>Amanee's Recipe Book</h2>
      </div>
    );
  }
}

const divStyle = {
  backgroundColor: "white",
  height: "auto",
  width: "100%",
  textAlign: "Center",
  fontSize: "35px",
};

export default AppNavBar;
