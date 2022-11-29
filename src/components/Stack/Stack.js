import React from "react";

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="Stack"
        className="px-[15vw] py-10 bg-stack object-contain text-neutral-200 "
      >
        <h2 className="text-4xl font-bold">Stack technique</h2>
        <div className="mt-5">
          {/* grid grid-cols-3 gap-5     flex flex-wrap  */}
          <div className="flex p-6 flex-row flex-wrap backdrop-blur-md bg-black/20 rounded-lg border border-light-12/160 gap-8 w-full">
            <div className="flex flex-row items-center gap-2 w-auto">
              <img
                className=" object-contain h-12 "
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              />
              <p className="sm:text-2xl text-md">JavaScript</p>
            </div>

            <div className="flex flex-row items-center gap-2 w-auto">
              <img
                className=" object-contain h-12 "
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              />
              <p className="sm:text-2xl text-md">CSS</p>
            </div>
          </div>

          {/* <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg ">
            <div className="grid grid-cols-3 grid-flow-row gap-y-4 gap-x-1 items-center">
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              />
            </div>
            <p className="text-2xl underline pb-4 mt-4">Front-end</p>
          </div>
          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
              />
              <img
                className=" object-contain h-16 w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
              />
            </div>
            <p className="text-2xl underline mt-4">Back-end</p>
          </div>
          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 w-32"
                src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg"
              />
              <img
                className=" object-contain h-16 w-32 col-span-2"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_M_SQL_Server.png"
              />
            </div>
            <p className="text-2xl underline mt-4">Database</p>
          </div>

          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 w-32 col-span-2"
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"
              />
              <img
                className=" object-contain h-16 w-32"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
              />
              <img
                className=" object-contain h-16 w-32"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg"
              />
            </div>
            <p className="text-2xl underline mt-4">Autre</p>
          </div>

          <p></p> */}
        </div>
      </div>
    );
  }
}

export default Stack;
