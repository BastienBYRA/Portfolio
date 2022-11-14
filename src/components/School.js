import React from "react";

class School extends React.Component {
  constructor(props) {
    super(props);
    this.imgSchool = this.props.imgSchool;
    this.textSchool = this.props.textSchool;
    this.yearSchool = this.props.yearSchool;
  }

  render() {
    return (
      <div className="py-4 w-full flex gap-4 items-center justify-center mt-2">
        <img className="max-w-[140px] object-contain" src={this.imgSchool} />
        <div>
          <p className="md:text-2xl sm:text-xl text-base">{this.textSchool}</p>
          <p className="italic">{this.yearSchool}</p>
        </div>
      </div>
    );
  }
}

export default School;
