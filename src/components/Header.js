import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="flex items-center lg:px-24 px-12 shadow-md border-b bg-zinc-900 text-white h-[10vh] fixed w-screen">
        <h1>BYRA Bastien</h1>
        <div className="flex ml-auto gap-5">
          <p className="underline">Qui suis-je</p>
          <p className="underline">Stack</p>
          <p className="underline">Experiences</p>
          <p className="underline">Projet</p>
        </div>
      </header>
    );
  }
}

export default Header;
