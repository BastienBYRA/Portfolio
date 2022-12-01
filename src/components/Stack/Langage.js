import React from "react";

class Langage extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.img = this.props.img;
  }

  render() {
    return (
      <div className="flex flex-row items-center gap-2 w-auto">
        <img
          className=" object-contain h-8"
          src={process.env.PUBLIC_URL + "/stack/" + this.img}
          alt={this.title}
        />
        <p className="sm:text-lg text-md">{this.title}</p>
      </div>
    );
  }
}

export default Langage;
