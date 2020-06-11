import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

class Recipe extends Component {
  state = {
    items: [
      { id: uuidv4(), name: "lasagna" },
      { id: uuidv4(), name: "soup" },
      { id: uuidv4(), name: "sandwich" },
      { id: uuidv4(), name: "bread" },
      { id: uuidv4(), name: "f" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          style={themeButton}
          onClick={() => {
            const name = prompt("What is the recipe name");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuidv4(), name }],
              }));
            }
          }}
        >
          Add Recipe
        </Button>

        <ListGroup>
          <TransitionGroup className="RecipeList" style={list}>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="dark"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  ></Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
const themeButton = {
  color: "dark",
  marginBottom: "2rem",
};

const list = {
  color: "black",
};

export default Recipe;
