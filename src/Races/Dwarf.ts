import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instance += 1;
  }

  static createdRacesInstances() {
    return this._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

/*
Requisito 2
Obs1: Esta classe está se estendendo da Race, logo, terá os mesmos atributos e métodos da mãe. Por isso que no super vamos passar os atributos que a mãe espera receber como parâmetro, porém esses mesmos atributos serão recebidos também por parâmetros aqui nesta classe. Além disso vamos colocar a lógica dos métodos.
Obs2: Obrigatoriamente vamos implemnetar os métodos createdRacesInstances e maxLifePoints, só que para isso precisamos de atributos para fazer a lógica dos métodos, até porque são apenas funções. Então vamos criar os atributos desta classe a fim de de servir aos métodos.
1 - Criaremos o atributo maxLifePoints que corresponde aos pontos de vida do bicho e já tem um valor determinado.
2 - Criaremos o atributo instance que é determinado como 0 e único desta classe, ou seja, estático e inicia com 0.
3 - No constructor que vamos colocar a lógica do atributo instance que é somar 1 a cada instanciação.
4 - Já o método createdRacesInstances, que é abstrato, ou seja, é próprio da classe e não instanciado, retorna o atributo instance;
5 - E o método maxLifePoints retorna o atributo maxLifePoints
*/