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
        <NavLink to="compc">comp c</NavLink>
      </li>
      <li>
        <NavLink to="compb">comp b</NavLink>
      </li>
      <li>
        <NavLink to="counter">Custom Hook</NavLink>
      </li>
      <li>
        <NavLink to="hooks">Hooks</NavLink>
      </li>
    </ul>
  );
};

export default RoutingEx;
