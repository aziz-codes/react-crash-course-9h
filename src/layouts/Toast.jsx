import React from "react";

const Toast = ({ display }) => {
  return (
    <section
      className={`fixed top-2   right-6 h-10 w-auto max-w-sm text-center border transition-all duration-75 ease-in ${
        display ? "flex" : "hidden"
      }`}
    >
      <div className="relative h-full w-auto max-w-xs rounded-sm shadow-lg bg-white px-2 flex items-center">
        some text goes here
      </div>
    </section>
  );
};

export default Toast;
