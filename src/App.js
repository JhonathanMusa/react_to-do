import "./App.css";
import React, { useState } from "react";
import List from "./components/List";

function App(props) {
  const [list, setList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });

  const addItems = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      const items = [...list, newItem];
      setList(items);
      setCurrentItem({
        text: "",
        key: "",
      });
    }
  };

  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
    });
  };

  return (
    <div className="App">
      <form onSubmit={addItems}>
        <h3>To Do List</h3>
        <input
          name="activity"
          placeholder="Say something"
          type="text"
          onChange={handleInput}
        />
        <button>Add</button>
      </form>
      <List list={list} />
    </div>
  );
}

export default App;
