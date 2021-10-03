// class Pokemon {
//   constructor(pokemonName, pokemonType, pokemonAttackList) {
//     this.name = pokemonName;
//     this.type = pokemonType;
//     this.attackList = pokemonAttackList;
//   }
//   callPokemon() {
//     console.log(`I choose you, ${this.name}`);
//   }
//   Attack(a) {
//     console.log(`${this.name} used ${this.attackList[a]} `);
//   }
// }

// let pikachu = new Pokemon("pikachu", "electric", [
//   "bite",
//   "thunderbolt",
//   "roll",
// ]);
// let charlizard = new Pokemon("charlizard", "fire", [
//   "bite",
//   "fireball",
//   "superslam",
// ]);
// let bolbasour = new Pokemon("bolbasour", "water", [
//   "bite",
//   "watercannon",
//   "groundsmash",
// ]);

// pikachu.callPokemon();
// charlizard.callPokemon();
// pikachu.Attack(1);
// charlizard.Attack(1);
// pikachu.Attack(2);
// charlizard.Attack(2);
// bolbasour.callPokemon();
// bolbasour.Attack(1);
// bolbasour.Attack(2);


function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  }

let pikachu = new Pokemon ('pikachu', 'electric', ['paralize', 'thunderBolt', 'quickAttack']);
let squirtle = new Pokemon ('squirtle', 'water', ['waterGun', 'surf', 'quickAttack']); 
let charmandr = new Pokemon ('charmandr', 'fire', ['dig', 'headAttack', 'roll']); 

console.log(pikachu.type);