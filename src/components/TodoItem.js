import React, { Component } from "react";

export default class extends Component {
  render() {
    const { title, handelDelete } = this.props;
    return (
      <li
        className="list-grpup-item text-capitalize d-flex 
      justify-content-between my-2"
      >
        <h6>{title}</h6>
        {/* <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handelDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div> */}
      </li>
    );
  }
}
