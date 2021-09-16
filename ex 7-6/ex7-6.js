// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.


const myObj = {A:1, B:2, C:3, D:4, E:5, F:6};

function swap (obj){
    const newObj = {};
    for (let key in myObj) {
        newObj[myObj[key]] = key;
    }
    return newObj;
}

console.log(myObj);
console.log(swap(myObj));