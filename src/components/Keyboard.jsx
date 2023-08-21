import React from "react";

const Keyboard = () => {
  const firstRow = [];
  for (let i = 0; i <= 12; i++) {
    firstRow.push(i);
  }
  const handleClick = (e) => {
    console.log(e.target.innerText);
  };
  const alphaOne = [
    "tab",
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
    "caps lock",
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
    "shift",
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
    "shift",
  ];

  const lastRow = ["ctrl", "fn", "alt", "space", "alt2", "fn2", "ctrl2"];
  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (alphaThree.includes(e.key)) {
      console.log("key found");
    } else {
      console.log("key not found");
    }
  });
  return (
    <section className="w-scree h-screen px-2 py-4 flex justify-center ">
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
                onClick={handleClick}
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
          {firstRow.slice(1, 10).map((btn, i) =>
            i === 0 ? (
              <button
                key={i}
                className="bg-white shadow-md h-9 w-5 rounded-md text-center font-semibold"
              >
                {btn}
              </button>
            ) : (
              <button
                key={i}
                className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold"
              >
                {btn}
              </button>
            )
          )}
          <button className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold">
            0
          </button>
          <button className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold">
            -
          </button>
          <button className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold">
            =
          </button>
          <button className="bg-white shadow-md h-9 w-24 rounded-md text-center font-semibold">
            Backspace
          </button>
        </div>

        {/* end of second row */}

        {/* start of third row */}
        <div className="flex w-full gap-1.5">
          {alphaOne.map((btn, i) =>
            i === 0 ? (
              <button
                key={i}
                className="bg-white shadow-md h-9 w-16 text-center font-semibold rounded-md"
              >
                {btn}
              </button>
            ) : (
              <button
                key={i}
                className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold"
              >
                {btn}
              </button>
            )
          )}
          <button className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold">
            \
          </button>
        </div>
        {/* end of third row */}
        {/* start of 4th row */}

        <div className="flex gap-1.5">
          {alphaTwo.map((btn, i) =>
            i === 0 || i === alphaTwo.length - 1 ? (
              <button
                className="bg-white shadow-md h-9 w-[72px] text-center font-semibold rounded-md"
                key={i}
              >
                {btn}
              </button>
            ) : (
              <button
                className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold"
                key={i}
              >
                {btn}
              </button>
            )
          )}
        </div>

        {/* end of 4th row */}
        {/* start of 5th row */}
        <div className="flex gap-1.5">
          {alphaThree.map((btn, i) =>
            i === 0 || i === alphaThree.length - 1 ? (
              <button
                className="bg-white shadow-md h-9 w-[93px] text-center font-semibold rounded-md"
                key={i}
              >
                {btn}
              </button>
            ) : (
              <button
                className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold"
                key={i}
              >
                {btn}
              </button>
            )
          )}
        </div>
        {/* end of 5th row */}
        {/* start of last row */}
        <div className="flex gap-1.5">
          {lastRow.map((btn, i) =>
            i === 3 ? (
              <button
                className="bg-white shadow-md h-9 w-[357px] rounded-md text-center font-semibold"
                key={i}
              >
                space
              </button>
            ) : (
              <button
                className="bg-white shadow-md h-9 w-9 rounded-md text-center font-semibold"
                key={i}
              >
                {btn}
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
