import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="flex items-center p-5 lg:px-24 px-12 shadow-md border-b bg-zinc-900 text-white w-screen">
        <h1>BYRA Bastien</h1>
        <div className="flex ml-auto gap-5">
          <p className="underline">Qui suis-je (+ Scolaire)</p>
          <p className="underline">Stack</p>
          <p className="underline">Experiences</p>
          <p className="underline">Projet</p>
        </div>
      </header>
    );
  }
}

export default Header;
