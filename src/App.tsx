import { useEffect, useRef, useState } from 'react';
import './App.css';
import KeyGroup from './components/KeyGroup';
import LargeKey from './components/LargeKey';
import Notes from './data/Notes';
import { Edge } from './domain/Constants';
import Note from './domain/Note';

const OCTAVE_RANGE = [4,5];

// const keys: Note[] = [];



function createKeys(range: number[]) {
  const keys: Note[] = [];

  range.forEach(octave => {
    Notes.forEach(note => {
      keys.push(new Note(note + octave));
    });
  });
  return keys;
}

const BL_KEYS = createKeys([3]);
const TL_KEYS = createKeys([4]);
const BR_KEYS = createKeys([4]);
const TR_KEYS = createKeys([5]);



// FIXME: freezes when more than 6 touches occur

function App() {
  console.log("render");

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

export default App;
