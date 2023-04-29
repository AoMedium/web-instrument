import React, { useState } from "react";
import NOTES from "../data/Notes";
import OctaveLayout from "../domain/OctaveLayout";

export interface NoteContextType {
  selectedNotes: string[]
  selectNotes: (notes: string[]) => void

  useRelativeVolume: boolean
  setUseRelativeVolume: (value: boolean) => void

  octaveLayout: OctaveLayout
  setOctaveLayout: (layout: OctaveLayout) => void
}

const NoteContext = React.createContext<NoteContextType>({} as NoteContextType);

type Props = {
  children: JSX.Element | JSX.Element[]
}

function NoteContextProvider(props: Props) {

  const [selectedNotes, setSelectedNotes] = useState<string[]>(NOTES);

  const selectNotes = (notes: string[]) => {
    setSelectedNotes(notes);
    console.log("store save: " + notes);
  };

  const useRelativeVolume = useRef<boolean>(true);

  const setUseRelativeVolume = (value: boolean) => {
    useRelativeVolume.current = value;
  };

  const octaveLayout = useRef<OctaveLayout>(new OctaveLayout(4,5,3,4));

  const setOctaveLayout = (layout: OctaveLayout) => {
    octaveLayout.current = layout;
  };

  console.log("context");

  return (
    <NoteContext.Provider value={
      {
        selectedNotes,
        selectNotes,

        useRelativeVolume: useRelativeVolume.current,
        setUseRelativeVolume,

        octaveLayout: octaveLayout.current,
        setOctaveLayout,
      } 
    }>
      {props.children}
    </NoteContext.Provider>
  );
}

export {
  NoteContext,
  NoteContextProvider
};