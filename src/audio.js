import * as Tone from "tone";

const options = {
  oscillator: {
    type: "triangle"
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.5,
    release: 3
  }
};

const synth = new Tone.PolySynth(Tone.Synth, options).toDestination();

export function playNote(note) {
  synth.triggerAttack(note, Tone.now());
}

export function stopNote(note, sustain) {
  synth.triggerRelease(note, Tone.now() + sustain);
}