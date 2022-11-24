export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  
  attack(enemy: {
    lifePoints: number;
    strength: number;
  }): void;

  receiveDamage(attackPoints: number): number;
}