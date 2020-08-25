import React, { Component } from "react";
import classNames from "classnames";
import "./TodoList.css";

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
    return (
      <div onClick={onClick} className={classNames("TodoItem", {})}>
        <p>{item.title}</p>
      </div>
    );
  }
}
export default TodoList;
