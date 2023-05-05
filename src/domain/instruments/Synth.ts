import * as Tone from "tone";
import InstrumentType from "./InstrumentType";

export default class Synth extends InstrumentType {

  private type: string;
  
  constructor(type?: "sine" | "square" | "triangle" | "sawtooth") {
    super("Synth", new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: "triangle"
      },
      envelope: { // FIXME: lowered volume during sustain
        attack: 0.005,
        decay: 0,
        sustain: 1,
        release: 3
      }
    }).toDestination());
    
    this.type = type || "triangle";
  }
}