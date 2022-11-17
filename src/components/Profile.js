import React from "react";
import byra from "../assets/BYRA.jpg";
import github from "../assets/profil/github.svg";
import email from "../assets/profil/email.svg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.helloSignRef = React.createRef();
  }

  // componentDidMount = () => {
  //   this.moveHelloSign();
  // };

  // moveHelloSign = () => {
  //   setTimeout(
  //     function () {
  //       this.helloSignRef.current.style.transform = "translateX(60vw)";
  //     }.bind(this),
  //     10000
  //   );
  //   console.log(this.helloSignRef.current.style.transform);
  // };

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
      // <div className="place-content-center flex flex-col ml-auto mr-auto h-screen text-center px-5 relative">
      //   <h1 className="font-bold sm:text-6xl text-5xl">BYRA</h1>
      //   <h2 className="font-bold sm:text-6xl text-5xl">Bastien</h2>
      //   <p className="sm:text-2xl text-xl mt-2">
      //     Full-Stack Developer - Mobile Developer
      //   </p>
      //   <div className="mt-8">
      //     <button
      //       class="rounded-md py-2 px-8 duration-200 border-2
      //       bg-slate-300 border-neutral-100
      //       hover:bg-neutral-100 hover:border-slate-300"
      //     >
      //       👋 Qui suis-je
      //     </button>
      //   </div>
      //   <div className="flex items-center mt-8 gap-4 justify-center">
      //     <img className="w-8 h-8" src={github} />
      //     <img className="w-8 h-8" src={email} />
      //   </div>
      // </div>

      <div className="place-content-center flex flex-col  h-screen text-center px-5 text-zinc-200 bg-[url('https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg')] bg-cover ">
        <h1 className="font-bold sm:text-6xl text-5xl">BYRA</h1>
        <h2 className="font-bold sm:text-6xl text-5xl">Bastien</h2>
        <p className="sm:text-2xl text-xl mt-2">
          Full-Stack Developer - Mobile Developer
        </p>
        <div className="mt-8">
          <button
            class="rounded-md py-2 px-8 duration-200 border-2 text-stone-900
          bg-slate-300 border-neutral-100
          hover:bg-neutral-100 hover:border-slate-300"
          >
            👋 Qui suis-je
          </button>
        </div>
        <div className="flex items-center mt-8 gap-4 justify-center">
          <img className="w-8 h-8 invert" src={github} />
          <img className="w-8 h-8 invert" src={email} />
        </div>
      </div>
    );
  }
}

export default Profile;
