import { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../context/NoteContextProvider";
import { instruments } from "../../domain/instruments/instruments";

type Props = {
  saveTrigger: number
  notifyChanges: () => void
}

export default function InstrumentSettings(props : Props) {

  const { instrument, setInstrument } = useContext(NoteContext);
  const [selectedInstrument, setSelectedInstrument] = useState<string>(instrument.getName());

  useEffect(() => {
    // Prevents pre-firing when first set to 0 on init.
    if (props.saveTrigger == 0) {
      return;
    }

    const type = instruments.find(type => type.getName() == selectedInstrument);

    setInstrument(type || instrument); // Unlikely to ever be undefined, but defaults to current instrument.

  }, [props.saveTrigger]);
  
  function handleChanges(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedInstrument(e.target.value);
    props.notifyChanges();
  }

  return (
    <>
      <h2>Instrument</h2>
      <div>
        <select onChange={handleChanges} defaultValue={selectedInstrument}>
          {instruments.map((type, index) => {
            return (
              <option key={index}>
                {type.getName()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}