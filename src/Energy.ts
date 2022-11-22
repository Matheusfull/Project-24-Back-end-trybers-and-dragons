export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}

/* const energia: Energy = {
  type_: 'mana',
  amount: 20,
};

console.log(energia); */