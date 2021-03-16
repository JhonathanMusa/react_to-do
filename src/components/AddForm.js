import React, { useState } from "react";
import List from "./List";

export default function AddForm() {
  const [list, setList] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });

  const submitHandle = (e) => {
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

  const inputHandle = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
    });
  };

  return (
    <div className="board">
      <form onSubmit={submitHandle}>
        <h3>To Do List</h3>
        <input
          name="activity"
          placeholder="Say something"
          type="text"
          onChange={inputHandle}
        />
        <button type="submit">Add</button>
      </form>
      <List list={list} />
    </div>
  );
}
