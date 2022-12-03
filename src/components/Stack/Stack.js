import React from "react";
import stackData from "../../data/stack.json";
import stackData2 from "../../data/stack2.json";
import Langage from "./Langage";
import { nanoid } from "nanoid";
import GridStack from "./GridStack";

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.pathImage = "../../assets/stack/";
  }

  render() {
    return (
      <div
        id="Stack"
        className="px-4 sm:px-8 md:px-20 py-10 bg-stack object-scale-down text-neutral-200 "
      >
        <h2 className="text-4xl font-bold text-center">Stack technique</h2>
        <div className="mt-5 mx-auto max-w-5xl gap-5 grid grid-cols-1 sm:grid-cols-2">
          {/* grid grid-cols-3 gap-5     flex flex-wrap  */}
          {/* <div className="flex p-6 flex-row flex-wrap backdrop-blur-md bg-black/20 rounded-lg border border-neutral-600 gap-y-6 gap-x-12 w-full">
            {stackData &&
              stackData.map((langage, i) => {
                return (
                  <Langage
                    key={nanoid()}
                    title={langage.name}
                    img={langage.img}
                  />
                );
              })}
          </div> */}

          {/* <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg border border-neutral-600 gap-y-6 gap-x-12 w-full">
            <h1 className="text-2xl font-bold ">Front-End</h1>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">HTML</p>
              </div>

              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">CSS</p>
              </div>
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <p className="sm:text-lg text-md">JS</p>
              </div>
            </div>
          </div>

          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg border border-neutral-600 gap-y-6 gap-x-12 w-full">
            <h1 className="text-2xl font-bold ">Front-End</h1>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">HTML</p>
              </div>

              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">CSS</p>
              </div>
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <p className="sm:text-lg text-md">JS</p>
              </div>
            </div>
          </div>

          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg border border-neutral-600 gap-y-6 gap-x-12 w-full">
            <h1 className="text-2xl font-bold ">Front-End</h1>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">HTML</p>
              </div>

              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <p className="sm:text-lg text-md">CSS</p>
              </div>
              <div className="flex flex-row items-center gap-2 w-auto">
                <img
                  className=" object-contain h-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <p className="sm:text-lg text-md">JS</p>
              </div>
            </div>
          </div> */}

          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* <div className="col-span-1 sm:col-span-2 flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-lg ">
            <div className="grid grid-cols-3 sm:grid-cols-6 grid-flow-row gap-y-4 gap-x-1 items-center">
              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <p className="text-md lg:text-lg text-center">HTML</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <p className="text-md lg:text-lg text-center">CSS</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                />
                <p className="text-md lg:text-lg text-center">JavaScript</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                />
                <p className="text-md lg:text-lg text-center">React</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                />
                <p className="text-md lg:text-lg text-center">Tailwind CSS</p>
              </div>

              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://seeklogo.com/images/J/jquery-logo-CFE6ECE363-seeklogo.com.png"
                />
                <p className="text-md lg:text-lg text-center">JQuery</p>
              </div>
            </div>
            <p className="text-2xl underline pb-4 mt-4">Front-end</p>
          </div> */}
          {stackData2 &&
            stackData2.map((grid, i) => {
              return (
                <GridStack
                  key={nanoid()}
                  category={grid.category}
                  langages={grid.langages}
                />
              );
            })}

          {/* <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
                />
                <p className="text-md lg:text-lg text-center">Java</p>
              </div>
              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
                />
                <p className="text-md lg:text-lg text-center">C#</p>
              </div>
              <div className="flex flex-col mx-auto">
                <img
                  className=" object-contain h-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
                />
                <p className="text-md lg:text-lg text-center">ASP.NET</p>
              </div>
            </div>
            <p className="text-2xl underline mt-4">Back-end</p>
          </div>
          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/de/d/dd/MySQL_logo.svg"
              />
              <img
                className=" object-contain h-16 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_M_SQL_Server.png"
              />
            </div>
            <p className="text-2xl underline mt-4">Database</p>
          </div>

          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 mx-auto"
                src="https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png"
              />
              <img
                className=" object-contain h-16 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg"
              />
            </div>
            <p className="text-2xl underline mt-4">Mobile</p>
          </div>

          <div className="flex p-6 flex-col backdrop-blur-md bg-black/20 rounded-xl">
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <img
                className=" object-contain h-16 mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
              />
            </div>
            <p className="text-2xl underline mt-4">Scripting</p>
          </div> */}

          <p></p>
        </div>
      </div>
    );
  }
}

export default Stack;
