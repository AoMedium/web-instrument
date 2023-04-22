import * as Tone from "tone";

const synth = new Tone.PolySynth().toDestination();

export function playNote(note) {
  synth.triggerAttack(note, Tone.now());
}

export function stopNote(note) {
  synth.triggerRelease(note);
}