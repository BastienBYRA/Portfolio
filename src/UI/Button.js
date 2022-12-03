import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
    this.scrollTo = this.props.scrollTo;
    this.styleType = this.props.styleType;
    this.styleLight =
      "rounded-md py-2 px-8 duration-200 border-2 bg-transparent border-zinc-500 border-b-4 hover:bg-neutral-200 mr-2 mb-2 cursor-pointer ";
    this.styleDark =
      "rounded-md py-2 px-8 duration-200 border-2 text-white bg-zinc-700 border-zinc-800 border-b-4 hover:bg-zinc-600 mr-2 mb-2 cursor-pointer";
    this.styleChoice =
      "rounded-md py-2 px-8 duration-200 border-2 bg-transparent border-black border-b-4 hover:bg-zinc-600 mr-2 mb-2 cursor-pointer";
  }
  // border-b-4 border-blue-700
  render() {
    return (
      <a href={this.scrollTo}>
        <button
          className={
            this.styleType == 1
              ? this.styleLight
              : this.styleType == 2
              ? this.styleDark
              : this.styleChoice
          }
        >
          {this.content}
        </button>
      </a>
    );
  }
}

export default Button;
