import { TouchEvent, useRef, useState } from 'react';
import Note from "../../domain/Note";
import { playNote, stopNote } from '../../audio';
import styles from "./Keys.module.css";

type Props = {
  note: Note
}

const pressedStyle = {
  borderColor: "#646cff",
  borderWidth: 4
} as React.CSSProperties;

export default function LargeKey(props: Props) {

  const isPressed = useRef(false);
  const [style, setStyle] = useState({});

  const keyClass = useRef(props.note.name.includes("#") ? styles.black : styles.white);

  function handleHitStart(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (isPressed.current) {
      return;
    }
    e.preventDefault();

    playNote(props.note.name, 0.1);
    
    isPressed.current = true;
    setStyle(pressedStyle);
  }

  function handleHitEnd(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (!isPressed.current) {
      return;
    }

    e.preventDefault();

    stopNote(props.note.name, 0);
    
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