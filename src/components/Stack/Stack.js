import React from "react";

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-[20vw] py-10 ">
        <h2 className="text-4xl font-bold">Ma Stack</h2>
        <div className="mt-5 flex flex-wrap">
          <div className="flex flex-col items-center max-h-24 max-w-24">
            <img
              className=" object-contain h-[15vmin] w-[15vmin] max-h-24 max-w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            />
            <p className="sm:text-2xl text-md">HTML</p>
          </div>
          <div className="flex flex-col items-center max-h-24 max-w-24">
            <img
              className=" object-contain h-[15vmin] w-[15vmin] max-h-24 max-w-24"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            />
            <p className="sm:text-2xl text-md">CSS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
