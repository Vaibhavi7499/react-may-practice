import React, { useReducer, useState } from "react";
import reducer from "../reduxEx/userSlice";

const HookUsereducer = () => {
  let counter = 0;
  const [state, dispatch] = useReducer(reducer, counter);

  function reducer(state, action) {
    switch (action.type) {
      case "INC":
        return state + 1;

      case "DEC":
        return state - 1;

      default:
    }
  }

  return (
    <div style={{margin:"20px 400px" }}>
      <h2>{state}</h2>
      <button
        className="btn btn-outline-success"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default HookUsereducer;
