import React from "react";
import byra from "../assets/BYRA.jpg";
import github from "../assets/profil/github.svg";
import email from "../assets/profil/email.svg";
import School from "./School";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lg:px-[18vw] px-[10vw] py-10 bg-zinc-800 text-zinc-200 ">
        {/* <h2 className="font-bold text-4xl">Qui suis-je</h2> */}
        <div className="md:flex gap-7">
          <div className="my-auto">
            <h1 className="font-bold sm:text-5xl text-3xl mb-5">
              BYRA Bastien, 21 ans
            </h1>
            <p className="sm:text-3xl text-xl">
              Cela fait plus de 3 ans que je suis plongé dans le vaste monde de
              la programmation informatique ; Web, Mobile, Server, Logiciel,
              Scripting et bien d'autre.
            </p>
            {/* <button
              class="rounded-md py-2 px-8 duration-200 border-2 mt-5
              bg-zinc-900 border-zinc-800
              hover:bg-zinc-800 hover:border-zinc-900"
            >
              Mon parcours scolaire
            </button> */}
          </div>
          <img
            className="max-w-xs object-contain mx-auto md:mt-0 mt-5 w-[70vmin]"
            src={byra}
          />
        </div>
      </div>
    );
  }
}

export default Description;
