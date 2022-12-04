import React from "react";
import { nanoid } from "nanoid";
import projectData from "../../data/project.json";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.paramsId = this.props.params.id;
    this.state = { currentProject: null };
  }

  componentDidMount() {
    this.getDetailProject(this.paramsId);
  }

  getDetailProject = (id) => {
    var findProject = projectData.find((p) => parseInt(p.id) === parseInt(id));
    this.setState({ currentProject: findProject });
  };

  render() {
    return (
      <div className="px-4 md:px-20 2xl:px-60 py-10 bg-zinc-800 text-neutral-200">
        {this.state.currentProject && (
          <div>
            <h1 className="text-4xl font-bold text-center">
              {this.state.currentProject.title}
            </h1>
            <div className="mt-8">
              <img
                src={this.state.currentProject.img}
                className="w-[70%] mx-auto"
              />
              <p>{this.state.currentProject.shortDesc}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Description;
