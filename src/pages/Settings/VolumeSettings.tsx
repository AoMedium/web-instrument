import { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../context/NoteContextProvider";

type Props = {
  saveTrigger: number
  notifyChanges: () => void
}

export default function VolumeSettings(props : Props) {

  const { useRelativeVolume, setUseRelativeVolume } = useContext(NoteContext);
  const [relativeVolumeBox, setRelativeVolumeBox] = useState<boolean>(useRelativeVolume);

  useEffect(() => {
    // Prevents pre-firing when first set to 0 on init.
    if (props.saveTrigger == 0) {
      return;
    }
    setUseRelativeVolume(relativeVolumeBox);

  }, [props.saveTrigger]);
  
  function toggleRelativeVolumeBox() {
    setRelativeVolumeBox(!relativeVolumeBox);
    props.notifyChanges();
  }

  return (
    <>
      <h2>Volume</h2>
      <div>
        <label>Use relative volume: </label>
        <input 
          type="checkbox"
          checked={relativeVolumeBox}
          onChange={() => toggleRelativeVolumeBox()} />
      </div>
    </>
  );
}