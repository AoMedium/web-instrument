import * as Tone from "tone";

const options = {
  polyphony: 1,
  
  oscillator: {
    type: "triangle"
  },
  envelope: {
    attack: 0.005,
    decay: 0,
    sustain: 1,
    release: 3
  }
};


const synth = new Tone.PolySynth(Tone.Synth, options).toDestination();

// const filter = new Tone.Filter(500, "lowpass").toDestination();
// synth.connect(filter);

// var tremolo = new Tone.Vibrato({
//   frequency: 5,
//   depth: 0.2,
// }).toDestination();

// synth.connect(tremolo);

export function playNote(note, velocity) {
  synth.triggerAttack(note, Tone.now(), velocity);
  console.log(synth.activeVoices);
}

export function stopNote(note, sustain) {
  synth.triggerRelease(note, Tone.now() + sustain);
}