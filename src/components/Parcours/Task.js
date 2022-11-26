import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = this.props.tasks;
  }

  componentDidMount = () => {
    console.log(this.tasks);
  };

  render() {
    return (
      <div>
        <ul className="mt-3">
          {this.tasks.map((task) => {
            return <li>{task.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Task;
