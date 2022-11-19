import React from "react";
import byra from "../assets/BYRA.jpg";
import github from "../assets/profil/github.svg";
import email from "../assets/profil/email.svg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.helloSignRef = React.createRef();
  }

  render() {
    return (
      // <div className="place-content-center flex flex-col ml-auto mr-auto h-screen text-center px-5 relative">
      //   <h1 className="font-bold md:text-6xl text-5xl">BYRA</h1>
      //   <h2 className="font-bold md:text-6xl text-5xl">Bastien</h2>
      //   <p className="md:text-2xl text-xl mt-2">
      //     Full-Stack Developer - Mobile Developer
      //   </p>
      //   <div className="mt-8">
      //     <button
      //       class="rounded-md py-2 px-8 duration-200 border-2
      // bg-slate-300 border-neutral-100
      // hover:bg-neutral-100 hover:border-slate-300"
      //     >
      //       👋 Qui suis-je
      //     </button>
      //   </div>
      //   <div className="flex items-center mt-8 gap-4 justify-center">
      //     <img className="w-8 h-8" src={github} />
      //     <img className="w-8 h-8" src={email} />
      //   </div>
      // </div>

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
          <div className="px-6">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">BYRA</h1>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
              Bastien
            </h2>
            <p className="text-xl mt-2 sm:text-2xl ">
              Full-Stack Developer - Mobile Developer
            </p>
          </div>

          <div
            className="lg:flex mt-7 mb-7
            md:mt-4
          lg:mb-0 lg:mt-10"
          >
            <div
              className="h-1 mx-[10vw] mb-2
               lg:mx-0 lg:mb-0 lg:w-3 lg:h-auto l
            bg-black"
            ></div>
            <div
              className="px-6 pt-3 pb-1
            sm:px-16 md:px-4"
            >
              <div className="flex flex-row items-center">
                <p
                  className=" text-xl font-bold
                sm:text-2xl"
                >
                  👋 Bonjour !
                </p>
                <div className="flex items-center gap-4 justify-end ml-auto">
                  <img className="w-8 h-8" src={github} />
                  <img className="w-8 h-8" src={email} />
                </div>
              </div>

              <p className="text-lg mt-8">
                Developpeur depuis plus de 3 ans situé sur Bordeaux.
              </p>
              <p className="text-lg mt-3">
                Fort de plusieurs années de formation dans les differentes
                parties du developpement informatique, je mets mon savoir et mes
                compétences a votre service.
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
            bg-zinc-800 border-zinc-800 hover:bg-neutral-200 mr-2 mb-2"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
