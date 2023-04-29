import React, { useRef, useState } from "react";
import NOTES from "../data/Notes";

export interface NoteContextType {
  selectedNotes: string[]
  selectNotes: (notes: string[]) => void

  useRelativeVolume: boolean;
  setUseRelativeVolume: (value: boolean) => void
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

  const useRelativeVolume = useRef<boolean>(false);

  const setUseRelativeVolume = (value: boolean) => {
    useRelativeVolume.current = value;
  };

  console.log("context");

  return (
    <NoteContext.Provider value={
      {
        selectedNotes,
        selectNotes,

        useRelativeVolume: useRelativeVolume.current,
        setUseRelativeVolume

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