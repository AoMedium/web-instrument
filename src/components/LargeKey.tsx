import { TouchEvent, useRef, useState } from 'react';
import Note from "../domain/Note";
import "./Key.module.css";
import { playNote, stopNote } from '../audio';

type Props = {
  note: Note
}

export default function LargeKey(props: Props) {

  const isPressed = useRef(false);
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({});

  function handleHitStart(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (isPressed.current) {
      return;
    }
    // TODO: may need separate functions to handle touch and click
    e.preventDefault();

    playNote(props.note.name);
    
    isPressed.current = true;
    setCount(prevCount => prevCount += 1);
    setStyle({
      borderColor: "#646cff",
      borderWidth: 4
    } as React.CSSProperties);
  }

  function handleHitEnd(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | TouchEvent) {
    if (!isPressed.current) {
      return;
    }

    e.preventDefault();

    stopNote(props.note.name);
    
    isPressed.current = false;
    setStyle({});
  }

  // If mousedown and enter, keep playing
  return (
    <button style={style}
      onTouchStart={handleHitStart}
      onTouchEnd={handleHitEnd}
      onMouseDown={handleHitStart}
      onMouseUp={handleHitEnd}
      onMouseLeave={handleHitEnd}
      >

      <p>{props.note.name}</p>
      <p>{count}</p>
    </button>
  );
}