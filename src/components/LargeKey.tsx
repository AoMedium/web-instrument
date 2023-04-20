import { TouchEvent, useState } from 'react';
import Note from "../domain/Note";

type Props = {
  note: Note
}

export default function LargeKey(props: Props) {

  const [count, setCount] = useState(0);

  function handleHit(e: TouchEvent) {
    // TODO: may need separate functions to handle touch and click
    e.preventDefault();

    console.log(props.note.name);
    setCount(prevCount => prevCount += 1);
  }

  return (
    <button onTouchStart={handleHit}>
      {props.note.name}
      {count}
    </button>
  );
}