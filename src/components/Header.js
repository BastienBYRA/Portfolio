import React from "react";
import menuIcon from "../assets/header-icons/menu.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="flex items-center lg:px-24 px-12 shadow-md border-b bg-zinc-900 text-white h-[10vh] fixed w-screen z-50">
        <h1>BYRA Bastien</h1>
        <div className="ml-auto gap-5 flex items-center">
          <p className="underline sm:block hidden">Qui suis-je</p>
          <p className="underline sm:block hidden">Stack</p>
          <p className="underline sm:block hidden">Experiences</p>
          <p className="underline sm:block hidden">Projet</p>
          <img src={menuIcon} className="invert sm:hidden block" />
        </div>
      </header>
    );
  }
}

export default Header;
