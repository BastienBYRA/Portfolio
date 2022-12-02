import React from "react";

class Period extends React.Component {
  constructor(props) {
    super(props);
    this.year = this.props.year;
  }

  render() {
    return (
      <div className="w-auto sm:w-52 sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className="font-bold text-xl">{this.year}</p>
        {/* <p>bg-white</p> */}
        <div className="hidden sm:block h-full w-2 bg-gradient-to-b from-yellow-300 via-pink-500 to-blue-700 mt-3"></div>
      </div>
    );
  }
}

export default Period;
