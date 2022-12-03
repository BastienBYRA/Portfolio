import React from "react";
import { nanoid } from "nanoid";
import Description from "./Description";
import { useParams } from "react-router-dom";

const WrappedDescription = (props) => {
  const params = useParams();
  return <Description key={nanoid()} params={params} {...props} />;
};

export default WrappedDescription;
