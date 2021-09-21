let myArr= [20, 30, 1, 100, 49, 64, 2]

// ----------------------- 1. max -------------------------------
let max = arr => arr.reduce((a,b) => a>b ? a : b)


console.log(max(myArr));


// ------------------------------------ sum of even numbers ----------------------
let even = arr => arr.filter(ele => ele % 2 === 0 ? ele : "").reduce((a, b) => a+b )
                        console.log(even(myArr));
                        

// -------------------------------- 3. average -----------------------
let average = arr => arr.reduce((a,b) => (a+b))/arr.length;

console.log(average(myArr));