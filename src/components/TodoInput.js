import React, { Component } from "react";

export default class extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="from-cotnrol text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            id="todo"
            type="submit"
            className="btn btn-block btn-primary mt-3"
          >
            add item
          </button>
        </form>
      </div>
    );
  }
}
