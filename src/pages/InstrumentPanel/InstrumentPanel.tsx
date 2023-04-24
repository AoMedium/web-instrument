import { NavLink } from "react-router-dom";
import Instrument from "./Instrument";
import NavButton from "../../components/NavButton";

export default function InstrumentPanel() {
  return (
    <>
      <NavButton to="settings">⚙️</NavButton>
      <Instrument />
    </>
  );
}