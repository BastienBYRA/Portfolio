import React from "react";
import School from "./School";

class Parcours extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-[20vw] pt-10 flex flex-col mx-auto items-center justify-center">
        <h2 className="text-4xl font-bold">Parcours scolaire</h2>
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
      </div>
    );
  }
}

export default Parcours;
