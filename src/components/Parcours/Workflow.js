import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid";
import school from "../../assets/icons/school.svg";
import work from "../../assets/icons/work.svg";

class Workflow extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.title = this.props.title;
    this.content = this.props.content;
    this.tasks = this.props.tasks;
    this.type = this.props.type;
  }

  render() {
    return (
      <div
        className="mt-5 border-white p-6 backdrop-blur-md bg-white/30 rounded-xl hover:bg-white/10
        transition ease-in-out duration-300"
      >
        <div className="flex flex-row">
          <img
            className="max-w-[140px] object-contain w-[30vw] bg-white"
            src={this.img}
          />
          <img
            className="ml-auto w-12 h-12"
            src={this.type == "school" ? school : work}
          />
        </div>

        <p className="underline text-lg mt-1">{this.title}</p>
        <p className="text-md mt-2">{this.content}</p>
        {this.tasks && <Task tasks={this.tasks} />}
      </div>
    );
  }
}

export default Workflow;
