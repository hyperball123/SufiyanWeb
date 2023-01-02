// rcc react component
import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        //4k->8k
        { id: 1, task: "Revise JS" },
        { id: 2, task: "Revise DSA" },
      ],
      currTask: "",
    };
  }

  handleAddTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: this.state.tasks.length + 1, task: this.state.currTask },
      ], //8k
    });
  };
  DeleteTask = (id) => {
    let nar = this.state.tasks.filter((taskObj) => taskObj.id !== id);
    this.setState({
      tasks: [...nar],
    });
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      currTask: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((taskObj) => {
          return (
            <li key={taskObj.id}>
              <p>{taskObj.task}</p>
              <button onClick={() => this.DeleteTask(taskObj.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}
// named export
// let a = 10;
// export { a };
