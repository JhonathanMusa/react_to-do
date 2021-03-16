import "./App.css";
import React, { Component } from "react";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  addItems = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.list, newItem];
      this.setState({
        list: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addItems}>
          <h3>To Do List</h3>
          <input
            name="activity"
            placeholder="Say something"
            type="text"
            onChange={this.handleInput}
          />
          <button>Add</button>
        </form>
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
