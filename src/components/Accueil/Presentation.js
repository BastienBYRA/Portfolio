import React from "react";
import github from "../../assets/icons/github.svg";
import email from "../../assets/icons/email.svg";
import Button from "../../UI/Button";

class Presentation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="mt-4 mb-7
        lg:mb-0 lg:mt-10 lg:flex "
      >
        <div
          className="h-1 mx-12 mb-2 bg-black
           lg:mx-0 lg:mb-0 lg:w-1 lg:min-w-[0.25rem] lg:h-auto"
        ></div>

        <div className="px-6 pt-3 pb-1 sm:px-16 lg:px-4 max-w-2xl lg:w-auto lg:max-w-xl">
          <div className="flex flex-row items-center">
            <p className=" text-xl font-bold sm:text-2xl"> 👋 Bonjour ! </p>
            <div className="flex items-center gap-4 justify-end ml-auto">
              <img className="w-8 h-8" src={github} />
              <img className="w-8 h-8" src={email} />
            </div>
          </div>

          <p className="text-lg mt-8">
            Developpeur depuis plus de 3 ans situé sur Bordeaux.
          </p>
          <p className="text-lg mt-3">
            Fort de plusieurs années de formation dans les differentes parties
            du developpement informatique, je mets mon savoir et mes compétences
            a votre service.
          </p>

          <div className="mt-5 gap-3">
            <Button
              key={1}
              content={"Parcours"}
              scrollTo={"#Parcours"}
              styleType={1}
            />
            <Button
              key={2}
              content={"Stack"}
              scrollTo={"#Stack"}
              styleType={1}
            />
            <Button
              key={3}
              content={"Projet"}
              scrollTo={"#Projet"}
              styleType={1}
            />
            <Button
              key={4}
              content={"Contact"}
              scrollTo={"#Contact"}
              styleType={2}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
