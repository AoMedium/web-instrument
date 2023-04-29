import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../../context/NoteContextProvider";
import styles from './OctaveLayoutConfig.module.css';
import OctaveLayout from "../../domain/OctaveLayout";

type Props = {
  saveTrigger: number
  notifyChanges: () => void
}

export default function OctaveLayoutConfig(props : Props) {

  const [layoutGridValues, setLayoutGridValues] = useState<number[]>([]);

  const { octaveLayout, setOctaveLayout } = useContext(NoteContext);

  useEffect(() => {
    setLayoutGridValues([octaveLayout.TL, octaveLayout.TR, octaveLayout.BL, octaveLayout.BR]);
  }, []);

  useEffect(() => {
    // Prevents pre-firing when first set to 0 on init.
    if (props.saveTrigger == 0) {
      return;
    }

    const newLayout = new OctaveLayout(
      layoutGridValues[0] || octaveLayout.TL,
      layoutGridValues[1] || octaveLayout.TR,
      layoutGridValues[2] || octaveLayout.BL,
      layoutGridValues[3] || octaveLayout.BR,
    );

    console.log(newLayout);

    setOctaveLayout(newLayout);

  }, [props.saveTrigger]);
  
  function updateOctaveLayout(event: ChangeEvent<HTMLInputElement>, index: number) {
    console.log("update: " + event.target.value);
    
    const newValues = [...layoutGridValues];
    newValues[index] = event.target.valueAsNumber;

    setLayoutGridValues(newValues);

    props.notifyChanges();
  }

  return (
    <>
      <h2>Octave Layout</h2>
      <div className={styles.layoutInput}>
        {layoutGridValues.map((value, index) => {
          return (
            <input key={index}
              type="number"
              value={value.toString()}
              onChange={(event) => updateOctaveLayout(event, index)}/>
          );
        })}
      </div>
    </>
  );
}