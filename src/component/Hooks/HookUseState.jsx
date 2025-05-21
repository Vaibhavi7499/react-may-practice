import React, { useState } from "react";
import "./HookUseState.scss";

const HookUseState = () => {
  let [counter, setCounter] = useState(0);

  return (
    <div className="maindiv">
      <h1>HookUseState</h1>
      <h2>Counter :{counter}</h2>
      <div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HookUseState;
