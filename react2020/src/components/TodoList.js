import React, { Component } from "react";
import classNames from "classnames";
import "./TodoList.css";

import tick from "../images/tick.svg";
import check from "../images/check.svg";

class TodoList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.onItemClick = this.onItemClick.bind(this);
  //   }
  //   onItemClick() {
  //     console.log(this.props.item);
  //   }
  render() {
    const { item, onClick } = this.props;
    let url = tick;
    if (!item.isComplete) {
      url = check;
    }
    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", { complete: item.isComplete })}
      >
        <img src={url} alt="picture" />
        <p>{item.title}</p>
      </div>
    );
  }
}
export default TodoList;
