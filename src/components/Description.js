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
      <div className="px-[20vw] py-10 bg-zinc-800 text-zinc-200">
        {/* <h2 className="font-bold text-4xl">Qui suis-je</h2> */}
        <div className="flex gap-4">
          <div className="my-auto">
            <h1 className="font-bold text-5xl mb-5">BYRA Bastien, 21 ans</h1>
            <p className="text-3xl">
              Cela fait plus de 3 ans que je suis plongé dans le vaste monde de
              la programmation informatique ; Web, Mobile, Server, Logiciel,
              Scripting et bien d'autre.
            </p>
            <button
              class="rounded-md py-2 px-8 duration-200 border-2 mt-5
              bg-zinc-900 border-zinc-800
              hover:bg-zinc-800 hover:border-zinc-900"
            >
              Mon parcours scolaire
            </button>
          </div>
          <img className=" max-w-xs object-contain" src={byra} />
        </div>

        {/* <div className="mt-5">
          <h2 className="font-bold text-4xl">Parcours scolaire</h2>
          <School
            imgSchool="https://www.iut.u-bordeaux.fr/general/wp-content/uploads/2017/03/iut_Bordeaux_RVB-01-e1488459784711.jpg"
            textSchool="Licence Pro DAWIN - IUT de Bordeaux - Bac +3"
            yearSchool="2022-2023"
          />
          <School
            imgSchool="https://file.diplomeo-static.com/file/00/00/01/48/14869.svg"
            textSchool="BTS SIO SLAM - Lycée Gustave Eiffel - Bac +2"
            yearSchool="2020-2022"
          />
        </div> */}
      </div>
    );
  }
}

export default Description;
