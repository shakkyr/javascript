const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function compare (arr1 , arr2) {
    let sameFood = [];
    for( let i = 0 ; i < arr1.length ; i++ ){
        for( let j = 0 ; j < arr2.length ; j++ ){
            arr1[i]===arr2[j] ? sameFood.push(arr1[i]) :false;
            
        }
    }
    return sameFood;
}
console.log(compare (food , food1));