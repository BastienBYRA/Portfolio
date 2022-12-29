import React from "react";
import { nanoid } from "nanoid";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = this.props.tasks;
  }

  render() {
    return (
      <div>
        <ul className="mt-3">
          {this.tasks.map((task) => {
            return <li key={nanoid()}>{task.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Task;
