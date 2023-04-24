import { Outlet } from "react-router-dom";
import './PageLayout.module.css';

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