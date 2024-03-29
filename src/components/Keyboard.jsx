import { useState, useEffect } from "react";

const Keyboard = () => {
  const firstRow = [];

  for (let i = 0; i <= 12; i++) {
    firstRow.push(i);
  }

  const alphaOne = [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
  ];
  const alphaTwo = [
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
  ];
  const alphaThree = [
    "LShift",

    "z",

    "x",

    "c",

    "v",

    "b",

    "n",

    "m",

    ",",

    ".",

    "/",

    "RShift",
  ];

  const lastRow = ["ctrl", "fn", "alt", "space", "alt2", "fn2", "ctrl2"];
  const sideKeys = [0, "-", "=", "Backspace"];
  const allKeys = [
    ...firstRow,
    ...alphaOne,
    ...alphaTwo,
    ...alphaThree,
    ...lastRow,
    ...sideKeys,
  ];

  const [combinedKeys, setCombinedKeys] = useState(
    allKeys.map((key) => ({
      key,
      isPressed: false,
    }))
  );

  useEffect(() => {
    const onKeyPress = (e) => {
      e.preventDefault();
      let index = combinedKeys.findIndex((item) => item.key == e.key);
      if (index !== -1) {
        const updatedKeys = [...combinedKeys];
        updatedKeys[index].isPressed = true;
        setCombinedKeys(updatedKeys);
      } else return;
    };
    window.addEventListener("keypress", onKeyPress);

    return () => window.removeEventListener("keypress", onKeyPress);
  }, []);

  const secondLastRow = combinedKeys.slice(39, 51);
  const lastRowItems = combinedKeys.slice(51, 58);
  const thirdRow = combinedKeys.slice(26, 39);
  const tabBtnRow = combinedKeys.slice(13, 26);
  // 0-13
  const numsRow = combinedKeys.slice(1, 10);
  const sideKeysSlice = combinedKeys.slice(58, 62);
  const mixedKeys = [...numsRow, ...sideKeysSlice];
  useEffect(() => {
    console.log("this will run once");
  }, []);
  console.log("this will run every time");
  //  58-62
  // console.log(combinedKeys);
  // pressed and unpressed Keys classes
  const pressedKey =
    "bg-red-500 shadow-md h-9 w-9 rounded-md text-center font-semibold";
  const normalKey =
    "bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold";
  return (
    <section className="w-scree h-screen px-2 py-4 flex justify-center flex-col items-center gap-2">
      <h4>Start pressing keys on your keyboard </h4>
      <div className="w-auto max-w-5xl h-96 border-red-400 border px-3 py-3 rounded-sm bg-gray-300 relative flex flex-col gap-1.5">
        {/* first row buttons */}
        <div className="flex w-full gap-2">
          <button className="bg-white shadow-md px-2.5 py-2 rounded-md text-center font-semibold">
            esc
          </button>
          <div className="flex gap-1">
            {firstRow.slice(1, 13).map((btn, i) => (
              <button
                className={`bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold ${
                  i % 4 === 0 ? "ml-4" : "ml-[4.5px]"
                }`}
                key={i}
              >
                f{btn}
              </button>
            ))}
          </div>
        </div>
        {/* end of first row */}

        {/* start of second row */}

        <div className="flex gap-1.5 w-full">
          <button className="bg-white shadow-md h-9 w-6 rounded-md text-center font-semibold">
            `
          </button>
          {mixedKeys.map((btn, i) =>
            i === 0 ? (
              <button
                key={i}
                className={
                  btn.isPressed
                    ? "bg-red-500 shadow-md h-9 w-5 rounded-md text-center font-semibold"
                    : "bg-white shadow-md h-9 w-5 rounded-md text-center font-semibold"
                }
              >
                {btn.key}
              </button>
            ) : i === mixedKeys.length - 1 ? (
              <button
                className={
                  btn.isPressed
                    ? "bg-red-500 shadow-md h-9 w-24 rounded-md text-center font-semibold"
                    : "bg-white shadow-md h-9 w-24 rounded-md text-center font-semibold"
                }
                key={i}
              >
                {btn.key}
              </button>
            ) : (
              <button
                className={btn.isPressed ? pressedKey : normalKey}
                key={i}
              >
                {btn.key}
              </button>
            )
          )}
        </div>

        {/* end of second row */}

        {/* start of third row */}
        <div className="flex w-full gap-1.5">
          {tabBtnRow.map((btn, i) =>
            i === 0 ? (
              <button
                key={i}
                className={`w-[4.2rem] ${
                  btn.isPressed ? pressedKey : normalKey
                }`}
              >
                {btn.key}
              </button>
            ) : (
              <button
                key={i}
                className={btn.isPressed ? pressedKey : normalKey}
              >
                {btn.key}
              </button>
            )
          )}
          <button className={normalKey}>\</button>
        </div>
        {/* end of third row */}
        {/* start of 4th row */}

        <div className="flex gap-1.5">
          {thirdRow.map((btn, i) =>
            i === 0 || i === thirdRow.length - 1 ? (
              <button
                className={
                  btn.isPressed
                    ? "bg-red-500 shadow-md h-9 w-[72px] text-center font-semibold rounded-md"
                    : "bg-white shadow-md h-9 w-[72px] text-center font-semibold rounded-md"
                }
                key={i}
              >
                {btn.key}
              </button>
            ) : (
              <button
                className={btn.isPressed ? pressedKey : normalKey}
                key={i}
                // onKeyUp={(e) => {
                //   console.log(e.key);
                // }}
              >
                {btn.key}
              </button>
            )
          )}
        </div>

        {/* end of 4th row */}
        {/* start of 5th row */}
        <div className="flex gap-1.5">
          {secondLastRow.map((btn, i) =>
            i === 0 || i === secondLastRow.length - 1 ? (
              <button
                className={
                  btn.isPressed ? pressedKey : `w-[5.8rem] ${normalKey}`
                }
                key={i}
              >
                {btn.key}
              </button>
            ) : (
              <button
                className={`${btn.isPressed ? pressedKey : normalKey}`}
                key={i}
              >
                {btn.key}
              </button>
            )
          )}
        </div>
        {/* end of 5th row */}
        {/* start of last row */}
        <div className="flex gap-1.5">
          {lastRowItems.map((btn, i) =>
            i === 3 ? (
              <button
                className={
                  btn.isPressed
                    ? "bg-red-500 shadow-md h-9 w-[357px] rounded-md text-center font-semibold"
                    : "bg-white shadow-md h-9 w-[357px] rounded-md text-center font-semibold"
                }
                key={i}
              ></button>
            ) : (
              <button
                className={btn.isPressed ? pressedKey : normalKey}
                key={i}
              >
                {btn.key}
              </button>
            )
          )}
        </div>
        {/* end of last row */}
      </div>
    </section>
  );
};
export default Keyboard;
