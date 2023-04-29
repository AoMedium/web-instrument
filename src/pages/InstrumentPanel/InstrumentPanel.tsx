import Instrument from "./Instrument";
import NavButton from "../../components/NavButton";
import styles from './InstrumentPanel.module.css';

export default function InstrumentPanel() {
  return (
    <>
      <div className={styles.navButton}>
        <NavButton to="settings">⚙️</NavButton>
      </div>
      <Instrument />
    </>
  );
}