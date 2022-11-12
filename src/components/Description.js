import React from "react";
import byra from "../assets/BYRA.jpg";
import github from "../assets/profil/github.svg";
import email from "../assets/profil/email.svg";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" px-32">
        <hs className="font-bold text-4xl">Qui suis-je</hs>
      </div>
    );
  }
}

export default Description;
