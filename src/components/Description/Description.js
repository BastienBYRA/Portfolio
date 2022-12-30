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
      <div className="px-4 md:px-20 2xl:px-60 py-10 bg-zinc-900 text-neutral-200">
        {this.state.currentProject && (
          <div>
            <h1 className="text-4xl font-bold text-center underline">
              {this.state.currentProject.title}
            </h1>
            <h2 className="text-xl text-center mt-10">
              {this.state.currentProject.longDesc}
            </h2>
            <div className="mt-8">
              <img
                src={this.state.currentProject.img}
                className="w-[70%] max-w-xl mx-auto"
              />
            </div>

            <p className="text-2xl underline mt-5 text-center">
              ~ {this.state.currentProject.job} ~
            </p>

            {this.state.currentProject.missions && (
              <div>
                <p className="text-2xl underline mt-16">Mes missions : </p>
                {this.state.currentProject.missions.map((mission, i) => {
                  return (
                    <div className="flex flex-row items-center gap-4 mt-3 pl-8">
                      <p className="text-sm sm:text-md lg:text-lg">
                        {mission.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            <p className="text-2xl underline mt-8">Les technos :</p>
            <div className="grid grid-cols-3">
              {this.state.currentProject.langages.map((langage, i) => {
                return (
                  <div className="flex flex-row items-center gap-4 mt-3 justify-center">
                    {/* <p className="text-sm sm:text-md lg:text-lg">➜</p> */}
                    <img
                      className=" object-contain h-8 sm:h-12"
                      src={process.env.PUBLIC_URL + "/stack/" + langage.img}
                    />
                    <p className="text-sm sm:text-md lg:text-lg">➜</p>
                    <p className="text-sm sm:text-md lg:text-lg">
                      {langage.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Description;
