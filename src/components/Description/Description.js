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
    window.scrollTo(0, 0);
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
            <h1 className="text-4xl font-bold underline">
              {this.state.currentProject.title}
            </h1>
            <h2 className="text-base sm:text-xl mt-10">
              {this.state.currentProject.longDesc}
            </h2>
            {/* <div className="mt-8">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/project/" +
                  this.state.currentProject.img
                }
                className="w-[70%] max-w-xl mx-auto"
              />
            </div> */}

            <p className="text-2xl  mt-16">
              <span className="underline">Ma position</span> :{" "}
              {this.state.currentProject.job}
            </p>

            {this.state.currentProject.missions && (
              <div className="mt-8">
                <p className="text-2xl">
                  <span className="underline">Mes missions</span> :{" "}
                </p>
                {this.state.currentProject.missions.map((mission, i) => {
                  return (
                    <div className="flex flex-row items-center gap-4 mt-3 pl-8">
                      <p className="text-md sm:text-lg">{mission.title}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {this.state.currentProject.langages && (
              <div className="mt-8 mb-8">
                <p className="text-2xl mt-8">
                  <span className="underline">Les technos</span> :
                </p>
                <div className="backdrop-blur-md bg-black/20 hover:bg-black/40 duration-200 rounded-xl flex px-8 mt-4 py-6 gap-16 flex-wrap shadow-md hover:shadow-lg">
                  {this.state.currentProject.langages.map((langage, i) => {
                    return (
                      <div className="flex flex-row items-center gap-4 justify-center">
                        <img
                          className=" object-contain h-8 sm:h-12"
                          src={process.env.PUBLIC_URL + "/stack/" + langage.img}
                        />
                        <p className="text-md lg:text-lg">➜</p>
                        <p className="text-md lg:text-lg">{langage.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Description;
