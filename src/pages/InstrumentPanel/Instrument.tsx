import KeyGroup from './KeyGroup';
import LargeKey from './LargeKey';
import NOTES from '../../data/Notes';
import { Edge } from '../../domain/Constants';
import Note from '../../domain/Note';
import { useContext, useEffect, useRef, useState } from 'react';
import { NoteContext } from '../../context/NoteContextProvider';

function createKeys(range: number[], notes: string[]) {

  const keys: Note[] = [];

  range.forEach(octave => {
    notes.forEach(note => {
      keys.push(new Note(note + octave));
    });
  });
  return keys;
}



// FIXME: freezes when more than 6 touches occur

function Instrument() {
  const {selectedNotes} = useContext(NoteContext);

  const [BL_KEYS, setBL_KEYS] = useState<Note[]>([]);
  const [TL_KEYS, setTL_KEYS] = useState<Note[]>([]);
  const [BR_KEYS, setBR_KEYS] = useState<Note[]>([]);
  const [TR_KEYS, setTR_KEYS] = useState<Note[]>([]);

  useEffect(() => {
    if (!selectedNotes) {
      return;
    }
    setBL_KEYS(createKeys([3], selectedNotes));
    setTL_KEYS(createKeys([4], selectedNotes));
    setBR_KEYS(createKeys([4], selectedNotes));
    setTR_KEYS(createKeys([5], selectedNotes));
  }, []);

  // const [output, setOutput] = useState("");

  // function permission () {
  //   if ( typeof( DeviceMotionEvent ) !== "undefined" 
  //     && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
  //       // (optional) Do something before API request prompt.
  //       DeviceMotionEvent.requestPermission()
  //         .then( response => {
  //           alert(response);
  //           // (optional) Do something after API prompt dismissed.
  //           if ( response == "granted" ) {
  //             setOutput(prev => prev + 2);
  //             window.addEventListener('devicemotion', handleMotionEvent, true);
  //           }
  //         }
  //       ).catch(alert);
  //   } else {
  //     alert( "DeviceMotionEvent is not defined" );
  //   }
  // }

  // function handleMotionEvent(event: DeviceMotionEvent) {
  //   // const x = event.acceleration.x;
  //   // const y = event.acceleration.y;
  //   // const z = event.acceleration.z;
  
  //   setOutput(prev => prev + 1);
  // }

  return (
    <>
      {/* <button onClick={permission}>Permission</button>
      <div>{output}</div> */}
      <KeyGroup position={[Edge.TOP, Edge.LEFT]}>
        {TL_KEYS.map((note, index) => {
          return <LargeKey key={index + "" + note} note={note}/>;
        })}
      </KeyGroup>
      <KeyGroup position={[Edge.TOP, Edge.RIGHT]}>
        {TR_KEYS.map((note, index) => {
          return <LargeKey key={index + "" + note} note={note}/>;
        })}
      </KeyGroup>
      <KeyGroup position={[Edge.BOTTOM, Edge.LEFT]}>
        {BL_KEYS.map((note, index) => {
          return <LargeKey key={index + "" + note} note={note}/>;
        })}
      </KeyGroup>
      <KeyGroup position={[Edge.BOTTOM, Edge.RIGHT]}>
        {BR_KEYS.map((note, index) => {
          return <LargeKey key={index + "" + note} note={note}/>;
        })}
      </KeyGroup>
    </>
  );
}

export default Instrument;