import React from "react";
import byra from "../../assets/BYRA.jpg";
import github from "../../assets/profil/github.svg";
import email from "../../assets/profil/email.svg";
import Intro from "./Intro";
import Presentation from "./Presentation";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex flex-col items-center place-content-center pt-[12vh]
      md:pt-[10vh] md:flex-row
      lg:pt-[14vh] lg:pb-[14vh]
      xl:pt-[18vh] xl:pb-[18vh]"
      >
        <div className="md:w-[45vw] lg:w-[50vw] mx-auto">
          <img
            className="rounded-full w-[50vw] h-[50vw] object-contain mx-auto max-h-[225px] max-w-[225px]
            md:rounded-none md:w-[40vw] md:h-[40vw] md:max-h-full md:max-w-full
            lg:max-h-[420px] lg:max-w-[420px]
            "
            src={byra}
          />
        </div>

        <div
          className="text-center mt-5
        md:pr-[5vw] md:w-[55vw]
        lg:w-[50vw] lg:pr-[8vw] lg:text-left
        xl:pr-[11vw] 2xl:pr-[15vw]"
        >
          <Intro />

          <Presentation />
        </div>
      </div>
    );
  }
}

export default Accueil;
