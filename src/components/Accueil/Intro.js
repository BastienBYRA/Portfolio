import React from "react";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-6">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">BYRA</h1>
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">Bastien</h2>
        <p className="text-xl mt-2 sm:text-2xl ">
          Full-Stack Developer - Mobile Developer
        </p>
      </div>
    );
  }
}

export default Intro;
