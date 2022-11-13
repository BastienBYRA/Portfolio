import React from "react";
import byra from "../assets/BYRA.jpg";
import github from "../assets/profil/github.svg";
import email from "../assets/profil/email.svg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Open a new tab when user click on a profile image
   */
  clickOnImage = () => {};

  /**
   * Open a dialog when user click on the button "Qui suis-je"
   * OR
   * Scroll to the concerned part
   */
  aboutMe = () => {};

  render() {
    return (
      //   <div className="py-3 bg-slate-600 mx-36 mt-10 flex rounded-lg h-96">
      //     <div className="ml-16 text-left w-2/4 place-content-center flex flex-col">
      //       <h1 className="font-bold text-6xl">BYRA</h1>
      //       <h2 className="font-bold text-6xl">Bastien</h2>
      //       <p>Full-Stack Developer - Mobile Developer</p>
      //       <div className="mt-5">
      //         <button class="rounded-md bg-slate-700 py-2 px-8">
      //           Qui suis-je
      //         </button>
      //       </div>
      //       <div className="flex items-center mt-5 gap-4">
      //         <img className="w-8 h-8" src={github} />
      //         <img className="w-8 h-8" src={email} />
      //       </div>
      //     </div>
      //     <div className="w-2/4">
      //       <img
      //         className="rounded-lg object-scale-down w-full h-full"
      //         src={byra}
      //       />
      //     </div>
      // </div>

      <div className="place-content-center flex flex-col ml-auto mr-auto h-screen text-center">
        <h1 className="font-bold text-6xl">BYRA</h1>
        <h2 className="font-bold text-6xl">Bastien</h2>
        <p className="text-2xl mt-2">Full-Stack Developer - Mobile Developer</p>
        <div className="mt-8">
          <button
            class="rounded-md py-2 px-8 duration-200 border-2
            bg-slate-300 border-neutral-100
            hover:bg-neutral-100 hover:border-slate-300"
          >
            Qui suis-je
          </button>
        </div>
        <div className="flex items-center mt-8 gap-4 justify-center">
          <img className="w-8 h-8" src={github} />
          <img className="w-8 h-8" src={email} />
        </div>
      </div>
    );
  }
}

export default Profile;
