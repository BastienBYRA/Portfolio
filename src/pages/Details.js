import React from "react";
import { nanoid } from "nanoid";
import Description from "../components/Description/Description";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  detailElement = () => {};

  render() {
    return (
      <div>
        <Description key={nanoid()} />
      </div>
    );
  }
}

export default Details;
