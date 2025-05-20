import { Link, Outlet } from "react-router-dom";
import "./pages.scss";

const Pages = () => {
  return (
    <div className="main-container">
      <ul>
        <li>
          <Link to="home">Go to home</Link>
        </li>
        <li>
          <Link to="about">Go to about</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

export default Pages;
