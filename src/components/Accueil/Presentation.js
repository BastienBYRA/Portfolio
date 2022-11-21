import React from "react";
import github from "../../assets/profil/github.svg";
import email from "../../assets/profil/email.svg";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="mt-7 mb-7 md:mt-4
        lg:mb-0 lg:mt-10 lg:flex "
      >
        <div
          className="h-1 mx-[10vw] mb-2 bg-black
           lg:mx-0 lg:mb-0 lg:w-3 lg:h-auto l"
        ></div>

        <div className="px-6 pt-3 pb-1 sm:px-16 md:px-4">
          <div className="flex flex-row items-center">
            <p className=" text-xl font-bold sm:text-2xl"> 👋 Bonjour ! </p>
            <div className="flex items-center gap-4 justify-end ml-auto">
              <img className="w-8 h-8" src={github} />
              <img className="w-8 h-8" src={email} />
            </div>
          </div>

          <p className="text-lg mt-8">
            Developpeur depuis plus de 3 ans situé sur Bordeaux.
          </p>
          <p className="text-lg mt-3">
            Fort de plusieurs années de formation dans les differentes parties
            du developpement informatique, je mets mon savoir et mes compétences
            a votre service.
          </p>

          <div className="mt-5 gap-3">
            <button
              className="rounded-md py-2 px-8 duration-200 border-2
        bg-transparent border-zinc-500 hover:bg-neutral-200 mr-2 mb-2"
            >
              Parcours
            </button>
            <button
              className="rounded-md py-2 px-8 duration-200 border-2
        bg-transparent border-zinc-500 hover:bg-neutral-200 mr-2 mb-2"
            >
              Stack
            </button>
            <button
              className="rounded-md py-2 px-8 duration-200 border-2
        bg-transparent border-zinc-500 hover:bg-neutral-200 mr-2 mb-2"
            >
              Projet
            </button>
            <button
              className="rounded-md py-2 px-8 duration-200 border-2 text-white
        bg-zinc-800 border-zinc-800 hover:bg-zinc-600 mr-2 mb-2"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
