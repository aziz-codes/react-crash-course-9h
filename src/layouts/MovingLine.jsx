import React from "react";

const MovingLine = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="relative w-96 h-64 border-2 border-t-0">
        <div className="h-2 w-8 bg-black absolute bottom-2 left-2 moving-div"></div>
      </div>
    </section>
  );
};

export default MovingLine;
