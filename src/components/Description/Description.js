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
      <div>
        <h1>Detail !</h1>
        {this.state.currentProject && (
          <div>
            <img src={this.state.currentProject.img} />
          </div>
        )}
      </div>
    );
  }
}

export default Description;
