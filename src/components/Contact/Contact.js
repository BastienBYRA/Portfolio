import { nanoid } from "nanoid";
import React from "react";
import Button from "../../UI/Button";
import PDF from "../../assets/document/CV Bastien BYRA vD.pdf";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="Contact"
        className="px-4 sm:px-8 md:px-20 py-16 pt-16 flex flex-col mx-auto items-center justify-center bg-neutral-200"
      >
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-6 text-lg px-8 text-center">
          Pour toutes questions ou opportunités, n'hésitez pas à me contacter.
        </p>
        <div className="pt-16 flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">
            Email :{" "}
            <a href="mailto:byra.bastien@gmail.com">
              <span className="underline">byra.bastien@gmail.com</span>
            </a>
          </p>
          <p className="text-lg font-semibold mt-4">
            Téléphone :{" "}
            <a href="tel:+33767605965">
              <span className="underline">07 67 60 59 65</span>
            </a>
          </p>
          <a
            target="_blank"
            href={PDF}
            className="text-lg mt-4 underline hover:underline-offset-2"
          >
            Mon CV
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
