import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((element) => {
          return <li key={element.key}>{element.text}</li>;
        })}
      </ul>
    );
  }
}

export default List