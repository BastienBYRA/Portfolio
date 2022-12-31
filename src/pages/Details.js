import React from "react";
import { nanoid } from "nanoid";
import WrappedDescription from "../components/Description/WrappedDescription";
import Header from "./../layouts/Header";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header key={nanoid()} isMainPage={false} />
        <WrappedDescription key={nanoid()} />
      </div>
    );
  }
}

export default Details;
