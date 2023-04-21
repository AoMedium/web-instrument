import { TouchEvent, useState } from 'react';
import Note from "../domain/Note";
import "./Key.module.css";

type Props = {
  note: Note
}

export default function LargeKey(props: Props) {

  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({});

  function handleHitStart(e: TouchEvent) {
    // TODO: may need separate functions to handle touch and click
    e.preventDefault();

    console.log(props.note.name);
    setCount(prevCount => prevCount += 1);
    setStyle({
      borderColor: "#646cff",
      borderWidth: 4
    } as React.CSSProperties);
  }

  function handleHitEnd(e: TouchEvent) {
    e.preventDefault();

    setStyle({});
  }

  return (
    <button style={style} 
      onTouchStart={handleHitStart}
      onTouchEnd={handleHitEnd}>

      <p>{props.note.name}</p>
      <p>{count}</p>
    </button>
  );
}