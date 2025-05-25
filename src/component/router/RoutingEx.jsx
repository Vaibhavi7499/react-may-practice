import React from "react";
import { NavLink } from "react-router-dom";
import "./routing.scss";

const RoutingEx = () => {
  return (
    <ul className="main-tag">
      <li>
        <NavLink to="userform">User Form</NavLink>
      </li>
      
      
      <li>
        <NavLink to="counter">Custom Hook</NavLink>
      </li>
      <li>
        <NavLink to="hooks">Hooks</NavLink>
      </li>
      <li>
        <NavLink to="lazyloading">Lazy Loading</NavLink>
      </li>
       <li>
        <NavLink to="hookform">react-hook-form</NavLink>
      </li>
    </ul>
  );
};

export default RoutingEx;
