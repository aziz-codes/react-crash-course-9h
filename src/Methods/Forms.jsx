import React, { useState, useRef, useEffect } from "react";

const Forms = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [data, setData] = useState([]);
  const handleClick = () => {
    let newData = {
      [emailRef.current.name]: emailRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };
    setData(newData);
    console.log(data);
  };
  console.log(data);
  useEffect(() => {
    const requestApi = async () => {
      const res = await fetch("http://localhost:5173/");
      const data = await res.text();
      console.log(data);
    };

    requestApi();
  }, []);
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="h-auto py-4 max-w-sm w-96 rounded-md shadow-lg bg-white flex flex-col px-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-400">
            email
          </label>
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="rounded-md outline-none border px-1 py-1"
            id="email"
            autoComplete="false"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-400" htmlFor="password">
            name
          </label>
          <input
            type="password"
            placeholder="Password"
            className="rounded-md outline-none border px-1 py-1"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <button
          className="outline-none px-4 py-1.5 rounded-md text-black border  mx-auto focus:shadow-inner"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Forms;
