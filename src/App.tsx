import './App.css';
import KeyGroup from './components/KeyGroup';
import LargeKey from './components/LargeKey';
import { Edge } from './domain/Constants';
import Note from './domain/Note';
import {playSynth} from "./audio";

function App() {

  return (
    <>
      <button onClick={playSynth}></button>
      <KeyGroup position={[Edge.TOP, Edge.LEFT]}>
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
      </KeyGroup>
      <KeyGroup position={[Edge.TOP, Edge.RIGHT]}>
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
      </KeyGroup>
      <KeyGroup position={[Edge.BOTTOM, Edge.LEFT]}>
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
      </KeyGroup>
      <KeyGroup position={[Edge.BOTTOM, Edge.RIGHT]}>
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
        <LargeKey note={new Note("G#")} />
      </KeyGroup>
    </>
  );
}

export default App;
