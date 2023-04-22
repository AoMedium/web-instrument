import { useEffect, useRef } from 'react';
import './App.css';
import KeyGroup from './components/KeyGroup';
import LargeKey from './components/LargeKey';
import Notes from './data/Notes';
import { Edge } from './domain/Constants';
import Note from './domain/Note';

const OCTAVE_RANGE = [4];

const keys: Note[] = [];

OCTAVE_RANGE.forEach(octave => {
  Notes.forEach(note => {
    keys.push(new Note(note + octave));
  });
});

function App() {

  return (
    <>
      {/* <KeyGroup position={[Edge.TOP, Edge.LEFT]}>
        <LargeKey note={new Note("A#4")} />
        <LargeKey note={new Note("A#4")} />
        <LargeKey note={new Note("A#4")} />
      </KeyGroup>
      <KeyGroup position={[Edge.TOP, Edge.RIGHT]}>
        <LargeKey note={new Note("A#4")} />
        <LargeKey note={new Note("A#4")} />
        <LargeKey note={new Note("A#4")} />
      </KeyGroup> */}
      {/* <KeyGroup position={[Edge.BOTTOM, Edge.LEFT]}>
      </KeyGroup> */}
      <KeyGroup position={[Edge.BOTTOM, Edge.LEFT]}>
        {keys.map((note, index) => {
          return (
            <>
              <LargeKey key={index} note={note}/>
              {/* {note.name.includes("B") ? <br></br>: null} */}
            </>
          );
        })}
      </KeyGroup>
      <KeyGroup position={[Edge.BOTTOM, Edge.RIGHT]}>
        {keys.map((note, index) => {
          return (
            <>
              <LargeKey key={index} note={note}/>
              {/* {note.name.includes("B") ? <br></br>: null} */}
            </>
          );
        })}
      </KeyGroup>
    </>
  );
}

export default App;
