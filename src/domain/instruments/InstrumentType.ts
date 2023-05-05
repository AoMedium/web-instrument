import { Instrument, InstrumentOptions } from 'tone/build/esm/instrument/Instrument';

export default abstract class InstrumentType {
  private name: string;
  private synth: Instrument<InstrumentOptions>;

  constructor(name: string, synth: Instrument<InstrumentOptions>) {
    this.name = name;
    this.synth = synth;
  }

  public getName() {
    return this.name;
  }

  public getSynth(): Instrument<InstrumentOptions> {
    return this.synth;
  }
}