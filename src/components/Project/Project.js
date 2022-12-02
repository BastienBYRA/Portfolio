import { nanoid } from "nanoid";
import React from "react";
import Button from "../../UI/Button";
import PresentationProject from "./PresentationProject";
import projectData from "../../data/project.json";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDesc: false };
  }

  test = () => {
    console.log("Test !! :D");
  };

  render() {
    return (
      <div
        id="Projet"
        className="px-4 sm:px-8 md:px-20 py-12 flex flex-col mx-auto items-center justify-center bg-zinc-800 text-zinc-200"
      >
        <h1 className=" text-4xl font-bold">Mes projets</h1>
        <div className="mt-6">
          <Button key={1} content={"Tous"} styleType={3} />
          <Button key={2} content={"Personnel"} styleType={3} />
          <Button key={3} content={"Professionnel"} styleType={3} />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-4 max-w-7xl">
          {projectData &&
            projectData.map((project, i) => {
              return (
                <PresentationProject
                  key={nanoid()}
                  title={project.title}
                  shortDesc={project.shortDesc}
                  img={project.img}
                  langages={project.langages}
                />
              );
            })}

          {/* <PresentationProject />
          <div>
            <img
              src="https://wallpaperaccess.com/full/2379729.jpg"
              className="aspect-video"
            />
            <p>DIGIT-ACTEON</p>
          </div>
          <div>
            <img
              src="https://i.redd.it/u105ro5rg8o31.jpg"
              className="aspect-video"
            />
            <p>Velo JCD</p>
          </div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/945950.jpg"
              className="aspect-video"
            />
            <p>Mon site portfolio</p>
          </div>
          <div>
            <img
              src="https://wallpaperaccess.com/full/2379729.jpg"
              className="aspect-video"
            />
            <p>DIGIT-ACTEON</p>
          </div>
          <div>
            <img
              src="https://i.redd.it/u105ro5rg8o31.jpg"
              className="aspect-video"
            />
            <p>Velo JCD</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Project;
