// const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// foods.sort(); //// ascending to descending 
// foods.reverse()//// Sort the array of strings from descending to ascending
// console.log(foods);


const foods = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
// let newFoods = [];
// for (let i =0 ; i<foods.length ; i++){
//     newFoods.push(foods[i].toUpperCase());
// }


foods.sort((a, b) => b-a);
console.log(foods);