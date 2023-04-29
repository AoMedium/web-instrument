import { Outlet } from "react-router-dom";
import './PageLayout.module.css';

export default function PageLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}