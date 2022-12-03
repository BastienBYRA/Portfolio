import React from "react";

class Langage2 extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.img = this.props.img;
  }

  render() {
    return (
      <div className="flex flex-col mx-auto">
        <img
          className=" object-contain h-12 sm:h-16"
          src={process.env.PUBLIC_URL + "/stack/" + this.img}
          alt={this.name}
        />
        <p className="text-sm sm:text-md lg:text-lg text-center">{this.name}</p>
      </div>
    );
  }
}

export default Langage2;
