import React from "react";
import { Store } from "../context/Context";
const Test1 = () => {
  const { count } = Store();

  return <div>{count}</div>;
};

export default Test1;
