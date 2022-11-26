import { nanoid } from "nanoid";
import React from "react";
import parcoursData from "../../data/parcours.json";
import Period from "./Period";
import Workflow from "./Workflow";

class Parcours extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div
        id="Parcours"
        className="px-[4vw] sm:px-[2vw] py-10 flex flex-col mx-auto items-center justify-center bg-zinc-800 text-zinc-200 lg:px-[20vw]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">Parcours</h2>
        {/* {schoolData.map((school, i) => (
          <School
            key={i}
            imgSchool={school.imgSchool}
            textSchool={school.textSchool}
            yearSchool={school.yearSchool}
          />
        ))} */}
        <div className="mt-7 sm:flex w-full gap-5 flex flex-col">
          {parcoursData &&
            parcoursData.map((work, i) => {
              return (
                <div className="block sm:flex sm:gap-5 " key={nanoid()}>
                  <Period year={work.year} key={nanoid()} />
                  <div className="w-auto sm:w-[80vw] sm:pr-7">
                    {work.experience.map((exp, i) => {
                      return (
                        <Workflow
                          key={nanoid()}
                          img={exp.img}
                          title={exp.title}
                          content={exp.content}
                          tasks={exp.missions}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}

          {/* <div className="w-auto sm:w-40 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <p className="font-bold text-xl">2022 - 2023</p>
            <div className="hidden sm:block h-full w-2 bg-gradient-to-b from-yellow-300 via-pink-500 to-blue-700 mt-3"></div>
          </div>

          <div className="w-fit">
            <div className="mt-5">
              <img
                className="max-w-[140px] object-contain w-[30vw]"
                src="https://www.iut.u-bordeaux.fr/general/wp-content/uploads/2017/03/iut_Bordeaux_RVB-01-e1488459784711.jpg"
              />
              <p className="underline text-lg">
                Apprentissage à IUT de Bordeaux Licence Pro DAWIN, Bac +3 - 1 an
              </p>
              <p className="text-md mt-2">
                Pendant cette année de licence pro, j'ai pu renforcer mes
                connaissances concernant la programmation ainsi qu'apprendre de
                nouveau concept et langage
              </p>
            </div>

            <div className="mt-5">
              <img
                className="max-w-[140px] object-contain w-[30vw]"
                src="https://sserenity-dentaire.com/wp-content/uploads/2018/09/acteon-satelec-sopro-logiciel-dentaire.jpg"
              />
              <p className="underline text-lg">
                Alternance chez Acteon Satelec - 1 an
              </p>
              <p className="text-md mt-2">
                J'ai travailler sur la webapp DigitActeon, une webapp interne de
                la boite permettant d'améliorer la productivité des employés
                ainsi que garder des traces numérique des traitements réalisés
                par les employés J'ai pendant cette alternance ;
              </p>
              <ul>
                <li> ▷ Fait de la documentation technique / utilisateur</li>
                <li> ▶ Refonte graphique</li>
                <li> ▷ Sécurisation / Gestion des erreurs</li>
                <li> ▶ Ajout de nouvelles fonctionnalités</li>
                <li> ▷ Optimiser le précédent code</li>
              </ul>
            </div>
          </div>

          <div className="w-auto sm:w-40 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <p className="font-bold text-xl">2022 - 2023</p>
            <div className="hidden sm:block h-full w-2 bg-gradient-to-b from-yellow-300 via-pink-500 to-blue-700 mt-3"></div>
          </div>

          <div className="w-fit">
            <div className="mt-5">
              <img
                className="max-w-[140px] object-contain w-[30vw]"
                src="https://www.iut.u-bordeaux.fr/general/wp-content/uploads/2017/03/iut_Bordeaux_RVB-01-e1488459784711.jpg"
              />
              <p className="underline text-lg">
                Apprentissage à IUT de Bordeaux Licence Pro DAWIN, Bac +3 - 1 an
              </p>
              <p className="text-md mt-2">
                Pendant cette année de licence pro, j'ai pu renforcer mes
                connaissances concernant la programmation ainsi qu'apprendre de
                nouveau concept et langage
              </p>
            </div>

            <div className="mt-5">
              <img
                className="max-w-[140px] object-contain w-[30vw]"
                src="https://sserenity-dentaire.com/wp-content/uploads/2018/09/acteon-satelec-sopro-logiciel-dentaire.jpg"
              />
              <p className="underline text-lg">
                Alternance chez Acteon Satelec - 1 an
              </p>
              <p className="text-md mt-2">
                J'ai travailler sur la webapp DigitActeon, une webapp interne de
                la boite permettant d'améliorer la productivité des employés
                ainsi que garder des traces numérique des traitements réalisés
                par les employés J'ai pendant cette alternance ;
              </p>
              <ul>
                <li> ▷ Fait de la documentation technique / utilisateur</li>
                <li> ▶ Refonte graphique</li>
                <li> ▷ Sécurisation / Gestion des erreurs</li>
                <li> ▶ Ajout de nouvelles fonctionnalités</li>
                <li> ▷ Optimiser le précédent code</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Parcours;
