import { nanoid } from "nanoid";
import React from "react";
import parcoursData from "../../data/parcours.json";
import Period from "./Period";
import Workflow from "./Workflow";

class Parcours extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div
        id="Parcours"
        className="px-4 sm:px-8 md:px-20 py-16 flex flex-col mx-auto items-center justify-center bg-zinc-800 text-zinc-200"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">Parcours</h2>
        <p className="mt-6 text-lg px-8 text-center">
          Cela fait maintenant 3 ans que je suis un cursus spécialisé dans le
          développement de solution informatique.
        </p>
        {/* <h2 className="text-5xl sm:text-8xl font-bold opacity-30 relative bottom-20">
          Parcours
        </h2> */}
        <div className="mt-12 sm:flex w-full gap-5 flex flex-col max-w-5xl">
          {parcoursData &&
            parcoursData.map((work, i) => {
              return (
                <div className="block sm:flex sm:gap-5 " key={nanoid()}>
                  <Period year={work.year} key={nanoid()} />
                  <div className="w-auto sm:w-[80vw] sm:pr-7">
                    {work.experience.map((exp, i) => {
                      return (
                        <Workflow
                          key={nanoid()}
                          img={exp.img}
                          title={exp.title}
                          content={exp.content}
                          type={exp.type}
                          tasks={exp.missions}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Parcours;
