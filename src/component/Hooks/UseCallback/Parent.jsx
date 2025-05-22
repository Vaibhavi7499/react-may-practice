import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [counter, setCounter] = useState(0);

  let incCounter = () => {
    setCounter((prev) => prev + 1);
  };

  //   function callbackEx(id) {
  //     console.log(id);
  //   }

  const callbackEx = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={incCounter}>Increment</button>
      <Child callbackEx={callbackEx} />
    </div>
  );
};

export default Parent;
