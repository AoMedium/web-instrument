import './App.css';
import LargeKey from './components/LargeKey';
import Note from './domain/Note';

function App() {

  return (
    <>
      <LargeKey note={new Note("G#")} />
      <LargeKey note={new Note("G#")} />
      <LargeKey note={new Note("G#")} />
    </>
  );
}

export default App;
