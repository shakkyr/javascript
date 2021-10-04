// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

const hero = { // dont change this
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
   }
   function whoIsStronger(getStrength){ // dont change this
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
   }
   console.log(whoIsStronger(hero.getStrength.bind(hero)));

//    getStrength() evaluate undefined, because this is in window scope 



