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
    </ul>
    <Outlet />
    </>
  );
};

export default HookLayout;
