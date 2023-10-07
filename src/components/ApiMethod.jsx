import { useEffect, useState } from "react";

const ApiMethod = () => {
  const baseUrl = "http://localhost";
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/vt.php`, {
        method: "POST",
      });
      const result = await res.json();
      // const { data } = result;
      // data.push(result);
      // setData(result);
      // console.log(result);
      setData(result);
      console.log(result);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-row gap-2">
      {data.length > 0
        ? data.map((item, index) => {
            return (
              <img
                key={index}
                className="h-24 w-24"
                alt="item"
                src={`${baseUrl}/${item.logo}`}
              />
            );
          })
        : "Something went wrong"}
    </div>
  );
};

export default ApiMethod;
