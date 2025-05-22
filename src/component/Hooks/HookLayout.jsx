import { NavLink, Outlet } from "react-router-dom";
import "./HookLayout.scss";

const HookLayout = () => {
  return (
    <>
    <ul className="main-container">
      <li>
        <NavLink to="/hooks" end>useState</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/useref">useRef</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/useeffect">useEffect</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/usereducer">useReducer</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/context">contextAPI</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/usememo">useMemo</NavLink>
      </li>
      <li>
        <NavLink to="/hooks/callback">useCallback</NavLink>
      </li>
    </ul>
    <Outlet />
    </>
  );
};

export default HookLayout;
