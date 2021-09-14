const mycountry = {
    country : 'finland',
    capital : 'Helsinki',
    language : 'finnish',
    population : 5.5,
    neighbours : ['sweden','norway','u.k'],
    describe () {
        return this.country + "has " + this.population + "million people, thier mother tongueis" + this.language + "they have neighbouring countries and a capital called" + this.capital;
      }

};

console.log(mycountry.describe());