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
    );
  }
}

export default Accueil;
