import React from "react";

class Langage extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.img = this.props.img;
    this.background = this.props.background;
    this.styleNormal = "object-contain h-12 sm:h-16";
    this.styleBackground = "object-contain h-12 sm:h-16 bg-neutral-200";
  }

  render() {
    return (
      <div className="flex flex-col mx-auto">
        <img
          className={
            this.background === false ? this.styleNormal : this.styleBackground
          }
          src={process.env.PUBLIC_URL + "/stack/" + this.img}
          alt={this.name}
        />
        <p className="text-sm sm:text-md lg:text-lg text-center">{this.name}</p>
      </div>
    );
  }
}

export default Langage;
