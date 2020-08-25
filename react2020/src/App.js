import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "mua bim bim", isComplete: true },
        { title: "di nau com", isComplete: true },
        { title: "di dao", isComplete: false },
      ],
    };
  }
  onItemClicked(item) {
    console.log("item click", item);
    return (event) => {
      console.log(item);
    };
  }
  render() {
    const { isComplete } = this.state;
    const { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length &&
          todoItems.map((item, index) => (
            <TodoList
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
              isComplete={isComplete}
            />
          ))}
      </div>
    );
  }
}

export default App;
