import { NavLink } from "react-router-dom";
import { ROOT_PATH } from "../../App";
import NoteSelection from "./NoteSelection";
import { useState } from "react";
import styles from './Settings.module.css';
import NavButton from "../../components/NavButton";

export default function SettingsPage() {

  const [saveTrigger, setSaveTrigger] = useState(0);

  function save() {
    setSaveTrigger(prev => prev += 1);
  }

  return (
    <div className={styles.settings}>
      <NavButton to={ROOT_PATH}>🎹</NavButton>
      <h1>Settings</h1>
      <NoteSelection saveTrigger={saveTrigger}/>
      <button onClick={save}>Apply</button>
    </div>
  );
}