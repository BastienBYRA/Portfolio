import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid";

class Workflow extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.title = this.props.title;
    this.content = this.props.content;
    this.tasks = this.props.tasks;
  }

  render() {
    return (
      <div className="mt-5 border-white p-6 backdrop-blur-md bg-white/30 rounded-xl">
        <img
          className="max-w-[140px] object-contain w-[30vw] bg-white"
          src={this.img}
        />
        <p className="underline text-lg">{this.title}</p>
        <p className="text-md mt-2">{this.content}</p>
        {this.tasks && <Task tasks={this.tasks} />}
      </div>
    );
  }
}

export default Workflow;
