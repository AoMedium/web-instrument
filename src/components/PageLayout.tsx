import { NavLink, Outlet } from "react-router-dom";
import './PageLayout.module.css';
import { ROOT_PATH } from "../App";

export default function PageLayout() {
  return (
    <>
      {/* <header>
        <NavLink to={ROOT_PATH}>🎹</NavLink>
        <NavLink to="settings">⚙️</NavLink>
      </header> */}
      <Outlet />
    </>
  );
}