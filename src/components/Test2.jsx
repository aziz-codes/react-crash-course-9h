import { Store } from "../context/Context";

const Test2 = () => {
  const { count } = Store();
  return <div>{count}</div>;
};

export default Test2;
