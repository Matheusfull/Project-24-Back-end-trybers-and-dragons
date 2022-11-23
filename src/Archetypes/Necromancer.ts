import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instance += 1;
  }

  get name():string {
    return this.name;
  }

  static createdArchetypeInstances() {
    return this._instance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}