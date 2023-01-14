import React from "react";
import { nanoid } from "nanoid";
import projectData from "../../data/project.json";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.paramsId = this.props.params.id;
    this.state = { currentProject: null };
    // this.leftClickBtn = React.createRef();
    // this.rightClickBtn = React.createRef();
  }

  componentDidMount() {
    this.getDetailProject(this.paramsId);
    window.scrollTo(0, 0);
  }

  clickImage = (nb) => {
    // console.log("[imagenumber='" + nb + "']");
    // mediumZoom("[imagenumber='" + nb + "']");
  };

  // moveToLeft() {}

  // moveToRight() {}

  getDetailProject = (id) => {
    var findProject = projectData.find((p) => parseInt(p.id) === parseInt(id));
    this.setState({ currentProject: findProject });
  };

  render() {
    return (
      <div className="px-4 md:px-20 2xl:px-60 pt-6 pb-10 bg-zinc-800 text-neutral-200">
        <Link to="/">
          <p className="opacity-40 hover:underline inline-block">
            ⬅ Retour à l'accueil
          </p>
        </Link>

        {this.state.currentProject && (
          <div className="mt-2">
            <h1 className="text-4xl font-bold underline">
              {this.state.currentProject.title}
            </h1>
            <h2 className="text-base sm:text-xl mt-10">
              {this.state.currentProject.longDesc}
            </h2>

            {this.state.currentProject.imageProject && (
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                {this.state.currentProject.imageProject.map((image, i) => {
                  return (
                    <Zoom>
                      <img
                        onClick={() => this.clickImage(i)}
                        src={
                          process.env.PUBLIC_URL +
                          "/project-inside/" +
                          this.state.currentProject.folderName +
                          "/" +
                          image.img
                        }
                        className="border border-black"
                        imagenumber={i}
                      />
                    </Zoom>
                  );
                })}
              </div>
            )}

            {/* <div className="flex flex-row justify-center flex-wrap mt-16 relative">
              <div>
                <div
                  className="bg-white rounded-full h-24 w-24 absolute top-1/2 left-[92%]"
                  ref={this.leftClickBtn}
                >
                  <p className="text-black text-7xl text-center">→</p>
                </div>
                <div
                  className="bg-white rounded-full h-24 w-24 absolute top-1/2 right-[92%]"
                  ref={this.rightClickBtn}
                >
                  <p className="text-black text-7xl text-center">←</p>
                </div>
              </div>

              <img
                src={
                  process.env.PUBLIC_URL +
                  "/project-inside/marketplace/mainPage.PNG"
                }
                className="w-[calc(90%/1)]"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/project-inside/marketplace/article.PNG"
                }
                className="w-[calc(90%/1)] hidden"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/project-inside/marketplace/detail.PNG"
                }
                className="w-[calc(90%/1)] hidden"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/project-inside/marketplace/basket.PNG"
                }
                className="w-[calc(90%/1)] hidden"
              />
            </div> */}

            <p className="text-2xl mt-12">
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
                <div className="backdrop-blur-md bg-black/20 hover:bg-black/40 duration-200 rounded-xl flex px-8 mt-4 py-6 gap-x-16 gap-y-8 flex-wrap shadow-md hover:shadow-lg">
                  {this.state.currentProject.langages.map((langage, i) => {
                    return (
                      <div className="flex flex-row items-center gap-x-4 justify-center">
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

        {!this.state.currentProject && (
          <div className="mt-2">
            <img
              className="max-h-60 mx-auto mt-8"
              src="https://media.printables.com/media/prints/310405/images/2696816_e91a5c47-f516-4f04-9c50-4bac5f94c7fe/thumbs/cover/1280x960/jpg/cover2.webp"
            />
            <p className="text-4xl sm:text-6xl text-center mt-4">🤨</p>
          </div>
        )}
      </div>
    );
  }
}

export default Description;
