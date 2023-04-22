import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import { HashLink } from "react-router-hash-link";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerShrink = React.createRef();
    this.showMenuTitle = React.createRef();
    this.burger = React.createRef();
    this.isMainPage = this.props.isMainPage;
    this.state = { showMenu: false, marginTop: null };
  }

  showHideMenu = (currentState) => {
    this.setState({ showMenu: currentState });

    //Montre
    if (currentState === true) {
      var burgerDOM = document.getElementById("baseMenu");
      // this.setState({ marginTop: window.getComputedStyle(burgerDOM).marginTop });
      this.burger.current.style.marginTop =
        window.getComputedStyle(burgerDOM).marginTop;
      this.headerShrink.current.style.overflow = "hidden";

      this.burger.current.style.marginBottom = "0px";

      // this.headerShrink.current.style.borderBottom = "0px";

      this.showMenuTitle.current.style.display = "block";
      this.headerShrink.current.style.height = "100vh";

      setTimeout(() => {
        this.showMenuTitle.current.style.transform = "translateX(0vw)";
      }, 300);

      //Retire
    } else {
      this.showMenuTitle.current.style.transform = "translateX(-150vw)";

      setTimeout(() => {
        // this.headerShrink.current.style.borderBottom = "1px";
        this.showMenuTitle.current.style.display = "none";
        this.showMenuTitle.current.style.transform = "translateX(100vw)";
        this.headerShrink.current.style.height = "60px";
      }, 300);
    }
  };

  hideMenu = () => {
    this.setState({ showMenu: false });
    this.showMenuTitle.current.style.transform = "translateX(-150vw)";

    setTimeout(() => {
      // this.headerShrink.current.style.borderBottom = "1px";
      this.showMenuTitle.current.style.display = "none";
      this.showMenuTitle.current.style.transform = "translateX(100vw)";
      this.headerShrink.current.style.height = "60px";
    }, 300);
  };

  render() {
    return (
      <header
        ref={this.headerShrink}
        className="flex flex-col lg:px-24 px-12 shadow-md bg-zinc-800 text-slate-100 h-[60px] sticky top-0 z-50 transition-all duration-300"
      >
        <div
          id="baseMenu"
          className="flex items-center mt-auto mb-auto"
          ref={this.burger}
        >
          <Link to="/">
            <h1>BYRA Bastien</h1>
          </Link>

          <div className="ml-auto gap-5 flex items-center">
            {/* <a href=""><p className="underline sm:block hidden">Parcours</p></a>
            <p className="underline sm:block hidden">Skills</p>
            <p className="underline sm:block hidden">Projets</p>
            <p className="underline sm:block hidden">Contact</p> */}

            <div
              className=" block"
              onClick={(e) => this.showHideMenu(!this.state.showMenu)}
            >
              <img src={menuIcon} className="invert hover:cursor-pointer" />
            </div>
          </div>
        </div>
        {/* {this.state.showMenu && (
          <div
            ref={this.showMenuTitle}
            className="mt-8 hidden transition-transform duration-300"
          >
            <p className="underline block text-lg ">Parcours</p>
            <p className="underline block text-lg">Skills</p>
            <p className="underline block text-lg">Projets</p>
            <p className="underline block text-lg">Contact</p>
          </div>
        )} */}
        {this.isMainPage && (
          <div
            ref={this.showMenuTitle}
            className="mt-auto hidden transition duration-1000 translate-x-[100vw] mb-28 md:mx-auto md:my-auto"
          >
            <a onClick={() => this.hideMenu()} href="#Parcours">
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Parcours
              </p>
            </a>
            <a onClick={() => this.hideMenu()} href="#Skills">
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Skills
              </p>
            </a>
            <a onClick={() => this.hideMenu()} href="#Projets">
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Projets
              </p>
            </a>
            <a onClick={() => this.hideMenu()} href="#Contact">
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Contact
              </p>
            </a>
          </div>
        )}

        {!this.isMainPage && (
          <div
            ref={this.showMenuTitle}
            className="mt-auto hidden transition duration-1000 translate-x-[100vw] mb-28 md:mx-auto md:my-auto"
          >
            <HashLink onClick={() => this.hideMenu()} smooth to={"/#Parcours"}>
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Parcours
              </p>
            </HashLink>
            <HashLink onClick={() => this.hideMenu()} smooth to={"/#Skills"}>
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Skills
              </p>
            </HashLink>
            <HashLink onClick={() => this.hideMenu()} smooth to={"/#Projets"}>
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Projets
              </p>
            </HashLink>
            <HashLink onClick={() => this.hideMenu()} smooth to={"/#Contact"}>
              <p className="w-fit underline block text-2xl duration-150 sm:text-4xl mb-2 md:mb-8 hover:text-6xl hover:mb-5 md:mx-auto">
                Contact
              </p>
            </HashLink>
          </div>
        )}
      </header>

      // <header
      //   ref={this.headerShrink}
      //   className=" lg:px-24 px-12 shadow-md border-b bg-zinc-800 text-slate-100 min-h-[60px] max-h-[80px] h-[10vh] sticky top-0 z-50 transition-all duration-300 "
      // >
      //   <div className="gap-4 flex items-center justify-center h-full">
      //     <a href="/">
      //       <h1>BYRA Bastien</h1>
      //     </a>

      //     <div className="ml-auto gap-x-5 flex items-center flex-wrap">
      //       <p className="underline block ">Parcours</p>
      //       <p className="underline block ">Skills</p>
      //       <p className="underline block ">Projets</p>
      //       <p className="underline block ">Contact</p>
      //     </div>
      //   </div>
      // </header>
    );
  }
}

export default Header;
