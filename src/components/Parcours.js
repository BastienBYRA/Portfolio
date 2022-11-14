import React from "react";
import School from "./School";
import schoolData from "../data/school.json";

class Parcours extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="md:px-[20vw] px-[12vw] py-10 flex flex-col mx-auto items-center justify-center">
        <h2 className="sm:text-4xl text-3xl font-bold">Parcours scolaire</h2>
        {schoolData.map((school, i) => (
          <School
            key={i}
            imgSchool={school.imgSchool}
            textSchool={school.textSchool}
            yearSchool={school.yearSchool}
          />
        ))}
      </div>
    );
  }
}

export default Parcours;
