import { useContext, useEffect, useState } from "react";
import NOTES from "../../data/Notes";
import './NoteSelection.module.css';
import { NoteContext } from "../../context/NoteContextProvider";

type Props = {
  saveTrigger: number
  notifyChanges: () => void
}

export default function NoteSelection(props : Props) {

  const { selectedNotes, selectNotes } = useContext(NoteContext);
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedNotes) {
      return;
    }
    console.log("update" + selectedNotes);
    setNotes(selectedNotes);
  }, []);

  useEffect(() => {
    // Prevents pre-firing when first set to 0 on init.
    if (props.saveTrigger == 0) {
      return;
    }
    console.log(props.saveTrigger);

    const savedNotes = [...notes].sort((a, b) => {
      return NOTES.indexOf(a) - NOTES.indexOf(b);
    });
    console.log("save notes: " + savedNotes);

    // https://stackoverflow.com/questions/14872554/sorting-on-a-custom-order
    selectNotes(savedNotes);

  }, [props.saveTrigger]);

  function toggleNote(note: string) {
    let newNotes = [...notes];

    if (newNotes.includes(note)) {
      newNotes = newNotes.filter(filterNote => filterNote != note);
    } else {
      newNotes.push(note);
    }
    setNotes(newNotes);
    props.notifyChanges();
  }

  return (
    <>
      <h2>Note Selection</h2>
      <ul>
        {NOTES.map((note, index) => {
          return (
            <li key={index}>
              <input 
                type="checkbox"
                checked={notes.includes(note)}
                onChange={() => toggleNote(note)} />
              <div>{note}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}