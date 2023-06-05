import { TouchEvent, useContext, useRef, useState } from 'react';
import Note from "../../domain/Note";
import ToneHandler from '../../ToneHandler';
import styles from "./Keys.module.css";
import { NoteContext } from '../../context/NoteContextProvider';

type Props = {
  note: Note
}

const pressedStyle = {
  borderWidth: 4
} as React.CSSProperties;

export default function LargeKey(props: Props) {

  const tone = ToneHandler.getInstance();

  const { useRelativeVolume } = useContext(NoteContext);

  const isPressed = useRef(false);
  const [style, setStyle] = useState({});

  const keyClass = useRef(props.note.name.includes("#") ? styles.black : styles.white);

  function handleHitStart(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (isPressed.current) {
      return;
    }
    e.preventDefault();

    tone.playNote(props.note.name, 0.1, useRelativeVolume);
    
    isPressed.current = true;
    setStyle(pressedStyle);
  }

  function handleHitEnd(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (!isPressed.current) {
      return;
    }

    e.preventDefault();

    tone.stopNote(props.note.name, 0);
    
    isPressed.current = false;
    setStyle({});
  }

  // If mousedown and enter, keep playing
  return (
    <button style={style} className={`${styles.key} ${keyClass.current}`}
      onTouchStart={handleHitStart}
      onTouchEnd={handleHitEnd}
      onMouseDown={handleHitStart}
      onMouseUp={handleHitEnd}
      onMouseLeave={handleHitEnd}
      >

      <p>{props.note.name}</p>
      {/* <p>{count}</p> */}
    </button>
  );
}