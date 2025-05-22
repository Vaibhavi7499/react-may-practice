import React from "react";
import { useLocation } from "react-router-dom";

const HookUseLocation = () => {
  let location = useLocation();
  //console.log(location)

  return (
    <div>
      <h3>{location?.pathname}</h3>
      <h3>{location?.hash}</h3>
      <h3>{location?.key}</h3>
      <h3>{location?.search}</h3>
      <h3>{location?.state?.fname}</h3>
    </div>
  );
};

export default HookUseLocation;
