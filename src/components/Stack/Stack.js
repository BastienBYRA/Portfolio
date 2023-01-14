import React from "react";
import stackData2 from "../../data/stack2.json";
import { nanoid } from "nanoid";
import GridStack from "./GridStack";

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.pathImage = "../../assets/stack/";
  }

  render() {
    return (
      <div
        id="Skills"
        className="px-4 sm:px-8 md:px-20 py-16 pt-16 bg-stack object-scale-down text-neutral-200 bg-no-repeat bg-cover"
      >
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <p className="mt-6 text-lg px-8 text-center">
          Au cours de mes 3 années en tant que développeur, j'ai pu maitriser
          différents langages et outils.
        </p>
        <div className="mt-12 mx-auto max-w-5xl gap-5 grid grid-cols-1 sm:grid-cols-2">
          {stackData2 &&
            stackData2.map((grid, i) => {
              return (
                <GridStack
                  key={nanoid()}
                  category={grid.category}
                  langages={grid.langages}
                />
              );
            })}
        </div>
      </div>

      // <div
      //   id="Stack"
      //   className="px-4 sm:px-8 md:px-20 py-16 pt-16 bg-stack object-scale-down text-neutral-200 bg-no-repeat bg-cover"
      // >
      //   <h2 className="text-4xl font-bold text-center">Skills</h2>
      //   <p className="mt-6 text-lg px-8 text-center">
      //     Au cours de mes 3 années en tant que developpeur, j'ai pu mettre mes
      //     mains sur divers langages et outils.
      //   </p>
      //   <div className="grid grid-cols-2 gap-5 mt-8 px-36">
      //     <div className=" backdrop-blur-md bg-black/40 hover:bg-black/60 duration-300 border-gray-800 border-2 hover:border-slate-600 rounded-lg flex flex-col text-center px-6">
      //       <h2 className="text-3xl font-bold text-center mt-4">
      //         Developpement
      //       </h2>
      //       <p className="mt-5">
      //         Je maitrise différentes technologie me permettant de pouvoir créer
      //         la solution correspondant a vos besoins.
      //       </p>
      //       <div className="mt-5 rounded-xl">
      //         <p>Front-End</p>
      //         <div className="flex flex-row flex-wrap justify-center gap-x-4"></div>
      //       </div>
      //     </div>
      //     <div className="backdrop-blur-md bg-black/40 hover:bg-black/60 duration-300 border-transparent border-2 hover:border-slate-600 rounded-lg flex flex-col text-center">
      //       <h2>Cybersécurité & Réseau</h2>
      //     </div>
      //     {/* <div className="h-12 bg-yellow-400 flex flex-col text-center">
      //       <h2>Réseau</h2>
      //     </div> */}
      //   </div>
      // </div>
    );
  }
}

export default Stack;

{
  /* <div className="col-span-1 sm:col-span-2 flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg ">
            <div className="grid grid-cols-3 sm:grid-cols-6 grid-flow-row gap-y-4 gap-x-1 items-center">
              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <p className="text-md lg:text-lg text-center">HTML</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <p className="text-md lg:text-lg text-center">CSS</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <p className="text-md lg:text-lg text-center">JavaScript</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                />
                <p className="text-md lg:text-lg text-center">React</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                />
                <p className="text-md lg:text-lg text-center">Tailwind CSS</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
                />
                <p className="text-md lg:text-lg text-center">JQuery</p>
              </div>
            </div>
            <p className="text-2xl underline pb-4 mt-4">Front-end</p>
          </div> */
}
