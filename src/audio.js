import * as Tone from "tone";

const synth = new Tone.Synth().toMaster();

export function playSynth() {
  synth.triggerAttackRelease("A4", "8n");
}