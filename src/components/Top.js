import React, { useState, Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Top extends Component {
  render() {
    return (
      <div>
        <div className="topBox" style={divStyle}>
          <div className="searchBox" style={searchBox}>
            <Form style={form}>
              <FormGroup>
                <Label for="exampleEmail">
                  What recipe are you looking for?
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Find by food, recipe, country, keyword..."
                />
                <Button style={button}>Search</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const divStyle = {
  backgroundColor: "#6d0b0a",
  height: "30vh",
  width: "100%",
};

const searchBox = {
  backgroundColor: "#6d0b0a",
  height: "100%",
  width: "50%",
  margin: "0 auto",
  padding: "auto",
  textAlign: "center",
  paddingTop: "7vh",
};

const form = {
  color: "white",
};

const button = {
  marginTop: "20px",
  backgroundColor: "black",
};
export default Top;
