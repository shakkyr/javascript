const mycountry = {
    country : 'finland',
    capital : 'Helsinki',
    language : 'finnish',
    population : 5.5,
    neighbours : ['sweden','norway','u.k'],
    describe () {
        return ` ${this.country} "has "  ${this.population}  "million people, thier mother tongueis"  ${this.language} "they have" + ${this.neighbours.length}  "ghbouring countries and a capital called"  ${this.capital}`;
      }
     

};

console.log(mycountry.describe());






// const obj= {
//   name :"itay",
//   age : 18,
//   checkAge : function (ageToCompare){
//      this.something = ageToCompare == this.age ? true : false
//   }
// }

// obj.checkAge(18)
// console.log(obj)