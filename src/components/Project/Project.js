import { nanoid } from "nanoid";
import React from "react";
import Button from "../../UI/Button";
import PresentationProject from "./PresentationProject";
import projectData from "../../data/project.json";
import Single from "./Single";
import { Link } from "react-router-dom";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDesc: false };
    this.showOrHide = React.createRef();
  }

  showDetails = () => {
    console.log(this.showOrHide);
    this.showOrHide.current.style.opacity = 1;
  };

  hideDetails = () => {
    console.log(this.showOrHide);
    this.showOrHide.current.style.opacity = 0;
  };

  render() {
    return (
      <div
        id="Projets"
        className="px-4 sm:px-8 md:px-20 py-16 pt-16 flex flex-col mx-auto items-center justify-center bg-zinc-800 text-zinc-200"
      >
        <h1 className="text-4xl font-bold">Projets</h1>
        <p className="mt-6 text-lg px-8 text-center">
          Vous trouverez ci-dessous certains de mes projets personnel et
          professionnel.
        </p>
        {/* <div className="mt-6">
          <Button key={1} content={"Tous"} styleType={3} />
          <Button key={2} content={"Personnel"} styleType={3} />
          <Button key={3} content={"Professionnel"} styleType={3} />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-7xl">
          {projectData &&
            projectData.slice(0, 6).map((project, i) => {
              return (
                <PresentationProject
                  key={nanoid()}
                  id={project.id}
                  title={project.title}
                  shortDesc={project.shortDesc}
                  img={project.img}
                  langages={project.langages}
                />
              );
            })}
        </div>

        <a className="mt-8" href="https://github.com/BastienBYRA">
          <Button content={"Voir plus"} styleType={2}></Button>
        </a>
      </div>
    );
  }
}

export default Project;
