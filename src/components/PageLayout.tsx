import { NavLink, Outlet } from "react-router-dom";
import './PageLayout.module.css';
import { ROOT_PATH } from "../App";

export default function PageLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}