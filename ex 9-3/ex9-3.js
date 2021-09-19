let foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
foods.sort(); //// ascending to descending 
foods.reverse()//// Sort the array of strings from descending to ascending
console.log(foods);


// ---------------------------     b ----------------------

        //   ------------------ b1 --------------------
let bigfoods = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
let newFoods = bigfoods.sort((a,b) => {
    return a.toLowerCase()> b.toLowerCase() ? 1:a.toLowerCase()<b.toLowerCase() ? -1 : 0 })

console.log(bigfoods);

        //   --------------------- b2 ---------------------
let newFoods2 = bigfoods.sort((a,b) => {
return b.toLowerCase()> a.toLowerCase() ? 1:b.toLowerCase()<a.toLowerCase() ? -1 : 0 })

console.log(bigfoods);




// ------------------------------- c -------------------------------------

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

function sort(arr) {
    return arr.sort((x,y) => y.length - x.length);
 }

// let longWord = 0;
// words.forEach(element => {
//     if (element.length >= longWord)
//        longWord = element.length

//   return longWord;
    
// });


console.log(sort(words));