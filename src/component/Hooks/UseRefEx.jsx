import React, { useRef } from "react";
import "./HookUseState.scss"

const UseRefEx = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="maindiv">
      <input ref={inputRef} />
      <button className="btn btn-outline-primary" onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default UseRefEx;
