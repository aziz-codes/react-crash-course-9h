import React, { useState, useRef, useEffect } from "react";

const MovingLine = () => {
  const ballRef = useRef(null);
  const [ball, setBall] = useState({
    x: 4,
    y: 7,
  });

  useEffect(() => {
    const changeCoords = (x, y) => {
      let newData = { x, y };
      setBall(newData);
    };

    const timer = setInterval(() => {
      let y = Math.ceil(Math.random() * 256) + 1;
      let x = Math.ceil(Math.random() * 230) + 1;
      changeCoords(x, y);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  console.log(ball);
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="relative w-96 h-64 border-2 border-t-0">
        <div className="h-2 w-8 bg-black absolute bottom-2 left-2 moving-div"></div>
        <div
          className={`absolute h-7 w-7 rounded-full bg-red-500 translate-y-[${
            ball.y + "px"
          }] translate-x-[${ball.x + "px"}]`}
          ref={ballRef}
          id="ball"
        ></div>
      </div>
    </section>
  );
};

export default MovingLine;
