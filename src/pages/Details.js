import React from "react";
import { nanoid } from "nanoid";
import WrappedDescription from "../components/Description/WrappedDescription";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WrappedDescription key={nanoid()} />
      </div>
    );
  }
}

export default Details;
