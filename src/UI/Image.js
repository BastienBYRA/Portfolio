import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.img = this.props.img;
    this.title = this.props.title;
    this.background = this.props.background;
    this.styleBackground = "h-12 object-contain bg-neutral-200";
    this.styleNormal = "h-12 object-contain";
  }

  render() {
    return (
      <>
        <img
          src={this.img}
          className={
            this.background === false ? this.styleNormal : this.styleBackground
          }
          alt={this.title}
        />
      </>
    );
  }
}

export default Image;
