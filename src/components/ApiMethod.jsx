import { useEffect } from "react";

const ApiMethod = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost/test.php");
      const result = await res.json();
      const { data } = result;
      console.log(data);
    };
    getData();
  }, []);
  return <div>ApiMethod</div>;
};

export default ApiMethod;
