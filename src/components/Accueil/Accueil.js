import React from "react";
import byra from "../../assets/BYRA.jpg";
import Intro from "./Intro";
import Presentation from "./Presentation";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex flex-col items-center place-content-center mt-6
         lg:flex-row lg:pb-16 lg:mt-16 lg:mb-8"
      >
        <div className="lg:w-[50vw] mx-auto">
          <img
            className="rounded-full w-[50vw] h-[50vw] object-contain mx-auto max-h-[225px] max-w-[225px]
            lg:rounded-none lg:w-[40vw] lg:h-[40vw]
            lg:max-h-[420px] lg:max-w-[420px]
            "
            src={byra}
          />
        </div>

        <div
          className="text-center mt-5
        lg:w-[50vw] lg:pr-10 lg:text-left
        2xl:pr-48"
        >
          <Intro />

          <Presentation />
        </div>
      </div>
      // <div className="flex flex-col pt-10 pb-6">
      //   <div className="mx-auto">
      //     <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
      //       BYRA Bastien
      //     </h1>
      //     <p className="text-xl mt-2 sm:text-2xl ">
      //       Full-Stack Developer - Cybersécurité
      //     </p>
      //   </div>
      //   <div>
      //     <img
      //       className="rounded-full w-[40vw] h-[40vw] object-contain mx-auto max-h-[225px] max-w-[225px]"
      //       src={byra}
      //     />
      //   </div>
      // </div>
    );
  }
}

export default Accueil;
