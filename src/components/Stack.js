import React from "react";

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="px-[20vw] py-10 bg-zinc-800 text-zinc-200 ">
        <h2 className="text-4xl font-bold">Ma Stack</h2>
        <div className="mt-5 flex flex-wrap">
          <div className=" h-[15vh] w-[15vh] bg-slate-100 flex flex-col items-center">
            <img
              className=" bg-amber-500 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            />
            <p className="text-2xl">HTML</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
