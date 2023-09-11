import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    const handleBlur = (e) => {
      document.title = "you can't open a new tab";
    };
    const handleFocus = () => {
      document.title = "App";
    };
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleBlur);
    };
  }, []);

  return <div>UseEffect</div>;
};

export default UseEffect;
