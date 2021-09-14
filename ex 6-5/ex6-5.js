// 1. Fill an array with 100 of a same object using array fill
// method.

const fill = new Array(100).fill(0)
console.log(fill) 

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.

let myArr = Array.from({length: 100}, () => (5))
console.log(myArr);

// 3. Convert only values of an object into one array.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

 let newArr = Object.values(object1)

//   4. Convert an array into one object.

let newObject = Object.assign({}, newArr);
console.log(newObject);


// 5. Find out if an array is an array.

