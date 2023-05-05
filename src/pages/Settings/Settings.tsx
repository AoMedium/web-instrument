import { ROOT_PATH } from "../../App";
import NoteSelection from "./NoteSelection";
import { useState } from "react";
import styles from './Settings.module.css';
import NavButton from "../../components/NavButton";
import VolumeSettings from "./VolumeSettings";
import OctaveLayoutConfig from "./OctaveLayoutConfig";
import InstrumentSettings from "./InstrumentSettings";

export default function SettingsPage() {

  const [saveTrigger, setSaveTrigger] = useState(0);
  const [hasChanges, setHasChanges] = useState(false);

  function save() {
    setSaveTrigger(prev => prev += 1);
    setHasChanges(false);
    console.log(hasChanges);
  }

  function notifyChanges() {
    setHasChanges(true);
  }

  return (
    <div className={styles.settings}>
      <NavButton to={ROOT_PATH}>🎹</NavButton>
      <h1>Settings</h1>
      <div className={styles.container}>
        <NoteSelection saveTrigger={saveTrigger} notifyChanges={notifyChanges}/>
        <InstrumentSettings saveTrigger={saveTrigger} notifyChanges={notifyChanges}/>
        <VolumeSettings saveTrigger={saveTrigger} notifyChanges={notifyChanges}/>
        <OctaveLayoutConfig saveTrigger={saveTrigger} notifyChanges={notifyChanges} />
      </div>
      <button onClick={save} disabled={!hasChanges}>Apply</button>
    </div>
  );
}