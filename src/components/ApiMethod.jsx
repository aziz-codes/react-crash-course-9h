import { useEffect, useState } from "react";

const ApiMethod = () => {
  const baseUrl = "http://localhost";
  // const url2 = "https://www.currenttick.info/vt";
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/vt.php`, {
        method: "POST",
      });
      const result = await res.json();
      setData(result);
    };
    getData();
  }, []);

  const totalVotes = data.reduce((acc, el) => {
    return (acc += el.count);
  }, 0);
  let testP = 49;
  return (
    <div className="w-full h-screen my-3 flex flex-col items-center gap-2">
      <h4>Total Votes are : {totalVotes}</h4>

      <div className="w-full max-w-3xl border flex flex-wrap gap-5 h-auto py-3 px-2">
        {data.map((item, index) => {
          let percentage =
            item.count === 0 ? 0 : (item.count / totalVotes) * 100;
          return (
            <div className="relative w-72 rounded-md border h-7" key={index}>
              <div className="asbolute top-0 left-0 w-full z-50 flex justify-between px-2">
                <h4>{item.name}</h4>
                <p> {Math.round((item.count / totalVotes) * 100)}%</p>
              </div>
              <div
                className={`absolute h-full rounded-md bg-sky-500 flex justify-center items-center`}
                style={{ width: Math.round(percentage) + "%" }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiMethod;
