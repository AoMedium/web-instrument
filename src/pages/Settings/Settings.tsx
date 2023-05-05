import { ROOT_PATH } from "../../App";
import NoteSelection from "./NoteSelection";
import { useState } from "react";
import styles from './Settings.module.css';
import VolumeSettings from "./VolumeSettings";
import OctaveLayoutConfig from "./OctaveLayoutConfig";
import InstrumentSettings from "./InstrumentSettings";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {

  const navigate = useNavigate();

  const [saveTrigger, setSaveTrigger] = useState(0);
  const [hasChanges, setHasChanges] = useState(false);

  function confirmExit() {
    if (!hasChanges) {
      navigate(ROOT_PATH);
      return;
    }

    const exit = confirm("You have unsaved changes, do you wish to save them?");
    
    if (exit) {
      save();
      // FIXME: navigates away before changes are put into effect
      // navigate(ROOT_PATH);
    }
  }

  async function save() {
    setSaveTrigger(prev => prev += 1);
    setHasChanges(false);
    console.log(hasChanges);
  }

  function notifyChanges() {
    setHasChanges(true);
  }

  return (
    <div className={styles.settings}>
      <button onClick={confirmExit}>🎹</button>
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