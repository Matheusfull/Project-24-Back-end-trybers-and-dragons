import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  // opcional
  energy?: Energy;
  
  attack(enemy: {
    lifePoints: number;
    strength: number;
    defense: number;
    // opcional
    energy?: Energy;
  }): void;

  // opcional
  special?(enemy: Fighter): void;

  levelUp(): void;

  receiveDamage(attackPoints: number): number;
}