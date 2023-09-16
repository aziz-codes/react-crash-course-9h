// import Forms from "./Methods/Forms";
import MovingLine from "./layouts/MovingLine";
// import Toast from "./layouts/Toast";
// import { useEffect, useState } from "react";
const App = () => {
  // const [showToast, setShowToast] = useState(false);
  // const handleClick = () => setShowToast((prev) => !prev);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowToast(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [showToast]);

  return (
    // <div>
    //   <button
    //     className="m-12 border bg-sky-500 px-2 py-2 rounded-md hover:ring-1"
    //     onClick={handleClick}
    //   >
    //     Show Toast
    //   </button>

    //   <Toast display={showToast} content="Some text goes here" />
    // </div>
    <MovingLine />
  );
};

export default App;

// test commit
