import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.list.map((element) => {
        return (
          <li className="items-list" key={element.key}>
            {element.text}
          </li>
        );
      })}
    </ul>
  );
}
