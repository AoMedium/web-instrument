import * as Tone from "tone";
import InstrumentType from "./domain/instruments/InstrumentType";
import { instruments } from "./domain/instruments/instruments";

export default class ToneHandler {
  private static instance: ToneHandler;

  // TODO: need a better way to set default than this
  private instrument: InstrumentType = instruments[0];

  private constructor() { return; }

  public static getInstance() {
    if (!ToneHandler.instance) {
      ToneHandler.instance = new ToneHandler();
    }
    return ToneHandler.instance;
  }

  public setInstrument(instrument: InstrumentType) {
    this.instrument = instrument;
  }

  public playNote(note: string, velocity: number, adjust=false) {
    let adjustedVel = velocity;
  
    if (adjust) {
      const f = Tone.Frequency(note).toFrequency();
      adjustedVel = 440 / f;
    }
  
    this.instrument.getSynth().triggerAttack(note, Tone.now(), adjustedVel);
  }

  public stopNote(note: string, sustain: number) {
    this.instrument.getSynth().triggerRelease(note, Tone.now() + sustain);
  }
}

//new Tone.PolySynth(Tone.Synth, options).toDestination();

// const filter = new Tone.Filter(500, "lowpass").toDestination();
// synth.connect(filter);

// var tremolo = new Tone.Vibrato({
//   frequency: 5,
//   depth: 0.2,
// }).toDestination();

// synth.connect(tremolo);