import React from "react";
import Task from "./Task";
import { nanoid } from "nanoid";
import school from "../../assets/icons/school.svg";
import work from "../../assets/icons/work.svg";
import { Link } from "react-router-dom";

class Workflow extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.title = this.props.title;
    this.content = this.props.content;
    this.tasks = this.props.tasks;
    this.type = this.props.type;
    this.projectDetails = this.props.projectDetails;
    this.mainDiv = React.createRef();
  }

  componentDidMount = () => {
    this.isDivOnScreen();
  };

  isDivOnScreen = () => {
    const observer = new IntersectionObserver((element) => {
      if (element[0].isIntersecting) {
        this.mainDiv.current.style.opacity = 1;
        this.mainDiv.current.style.transform = "translateX(0%)";
        observer.unobserve(this.mainDiv.current);
      }
    });
    observer.observe(this.mainDiv.current);
  };

  render() {
    return (
      <div
        ref={this.mainDiv}
        className=" opacity-0 duration-[2000ms] translate-x-[2%] sm:translate-x-[6%] lg:translate-x-[12%] xl:translate-x-[18%] "
      >
        <div
          className="mt-5 border-white p-6 backdrop-blur-md bg-white/30 rounded-xl hover:bg-white/10
        transition ease-in-out duration-300"
        >
          <div className="flex flex-row">
            {this.img && (
              <img
                className="max-w-[140px] object-contain w-[30vw] max-h-20 bg-white"
                src={this.img}
              />
            )}
            <img
              className="ml-auto w-12 h-12"
              src={this.type == "school" ? school : work}
            />
          </div>

          <p className="underline text-lg mt-1">{this.title}</p>
          <p className="text-md mt-2">{this.content}</p>
          {this.tasks && <Task tasks={this.tasks} />}

          {this.projectDetails && (
            <Link to={this.projectDetails}>
              <p className="inline-block mt-4 font-bold px-6 py-2 rounded-sm bg-black/30 hover:bg-black/50 duration-300 border-transparent border-2">
                Consulter
              </p>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Workflow;
