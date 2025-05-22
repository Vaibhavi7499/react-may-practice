import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  let [fname, setfname] = useState("hello");

  //   let memoEx = () => {
  // console.log("test");
  //     for (let i = 0; i <= 10000; i++) {

  //     }
  //   }

  const memoEx = useMemo(() => {
    console.log("test");
    for (let i = 0; i <= 10000; i++) {}
  },[]);

  return (
    <div>
        <h2>{fname}</h2>
      {memoEx}
      <button className="btn btn-outline-secondary" onClick={() => setfname("hello world")}>changeName</button>
    </div>
  );
};

export default HookUseMemo;
