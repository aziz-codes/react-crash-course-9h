import { useEffect } from "react";

const ApiMethod = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost/vote/src/vt.php", {
        method: "POST",
      });
      const result = await res.json();
      //   const { data } = result;
      console.log(result);
    };
    getData();
  }, []);
  return <div>ApiMethod</div>;
};

export default ApiMethod;
