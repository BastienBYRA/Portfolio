import React from "react";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-6">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">BYRA</h1>
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl">Bastien</h2>
        <p className="text-xl mt-2 sm:text-2xl ">
          Full-Stack / Mobile Developer - Cybersecurity
        </p>
        {/* <p className="text-md ">Situé sur Bordeaux</p> */}
      </div>
    );
  }
}

export default Intro;
