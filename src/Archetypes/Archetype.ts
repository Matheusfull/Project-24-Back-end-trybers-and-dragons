import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name():string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost():number {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

/*
Requisito 4
1 - Vamos tipar os atributos
2 - Pegar o atributos name e dizer que ele será recebido por parâmetro
3 - Vamos pegar os atributos e colocar os valores. Lembrando que o valor do name será recebido como parâmetro e o special e o cost. Esses atributos serão determinados no constructor
4 - Os atributos são privados, mas nada impede de serem lidos. Portanto usaremos uns getters para cada atributo a fim de que possam ser lidos.
5 - Teremos um método que só será utilizado nesta classe e para isso denominamos como static. Esse método se chama createdArchetypeInstances e agora só retorna um erro.
6 - Teremos agora um método que será apenas a assinatura do método, um aviso de que tem de ser implementado nas filhas e ele retorna lá a interface que implementamos anteriormente.
*/