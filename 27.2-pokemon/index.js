function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  this.callPokemon = function () {
    console.log(`I choose you, ${this.name} ` );
    
  };
  this.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);

    
  }
  }

let pikachu = new Pokemon ('pikachu', 'electric', ['paralize', 'thunderBolt', 'quickAttack']);
let squirtle = new Pokemon ('squirtle', 'water', ['waterGun', 'surf', 'quickAttack']); 
let charmandr = new Pokemon ('charmandr', 'fire', ['dig', 'headAttack', 'roll']); 

pikachu.callPokemon();
squirtle.callPokemon();
pikachu.attack(1);
console.log('squirtle hp droped to 50%');
squirtle.attack(0);
console.log('pikachu hp droped to 70%');
pikachu.attack(0);
console.log('squirtle defeated');
charmandr.callPokemon();
charmandr.attack(0);
console.log('pikachu hp droped to 30%');
pikachu.attack(0);
console.log('charmandr paralizrd he cant move now');
pikachu.attack(2);
console.log(`charmandr hp droped to 30%`);









