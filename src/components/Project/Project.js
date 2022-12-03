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
                  id={project.id}
                  title={project.title}
                  shortDesc={project.shortDesc}
                  img={project.img}
                  langages={project.langages}
                />
              );
            })}
        </div>
      </div>

      // <div
      //   id="Projet"
      //   className="px-4 sm:px-8 md:px-20 py-12 flex flex-col bg-zinc-800 text-zinc-200"
      // >
      //   <h1 className=" text-4xl font-bold text-center">Mes projets</h1>

      //   <div className=" flex flex-row mt-8 w-full gap-8">
      //     <div className="w-[500px] flex flex-col">
      //       <div className="p-4 flex flex-row items-center gap-3 bg-slate-900">
      //         <div className="p-2 rounded-full bg-zinc-800">
      //           <img
      //             src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      //             className="h-10"
      //           />
      //         </div>
      //         <h2 className="text-xl">Site portfolio</h2>
      //       </div>
      //       <div className="p-4 flex flex-row items-center gap-3 bg-slate-900">
      //         <div className="p-2 rounded-full bg-zinc-800">
      //           <img
      //             src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
      //             className="h-10 rounded-full"
      //           />
      //         </div>
      //         <h2 className="text-xl">Acteon Satelec - DIGIT-ACTEON</h2>
      //       </div>
      //       <div className="p-4 flex flex-row items-center gap-3 bg-slate-900">
      //         <div className="p-2 rounded-full bg-zinc-800">
      //           <img
      //             src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      //             className="h-10"
      //           />
      //         </div>
      //         <h2 className="text-xl">EMS Proto - Scrapping</h2>
      //       </div>
      //     </div>
      //     <div className="border-2 p-4">
      //       <img
      //         src="https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_960_720.jpg"
      //         className=" object-contain mx-auto "
      //       />
      //       <div className="mt-5">
      //         <p className="text-2xl">Description</p>
      //         <p className="text-xl mt-2">
      //           DIGIT-ACTEON est un site interne permettant de garder des traces
      //           numériques des opérations réalisé en interne (Création de
      //           produit, quantité, documentation...)
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Project;
