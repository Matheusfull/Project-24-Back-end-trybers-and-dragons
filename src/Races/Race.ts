export default abstract class Race {
  private _name : string;
  private _dexterity : number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

/*
Requisito 1 -
1 - Vamos criar uma classe abstrata a fim de que não seja instanciada e sirva como molde para outras classes. Ela será meio que a genérica de tudo. A fonte das classes. Será a Progenitora
2 - Vamos ter os atributos com seus tipos e sendo recebidos por parâmetros, ou seja, a classe que estender a Race, vai ter que passar como parâmetro o name e dexterity que serão usados aqui.
3 - Como os atributos são privados, vamos fazer uns gatters a fim de que eles sejam lidos por outras classes.
4 - Só criar o método de retornando um número e com o aviso.
5 - Aqui vamos só colocar a assinatura do método, ou seja, vai obrigar a classe que estender a Race, implementar a lógica de maxLifePoints.
*/