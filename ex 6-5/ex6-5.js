// 1. Fill an array with 100 of a same object using array fill
// method.

const fill = new Array(100).fill('shadi');
console.log(fill);

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.

let myArr = Array.from({ length: 100 }, (v, i) => i+1);
console.log(myArr);

// 3. Convert only values of an object into one array.

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

let newArr = Object.values(object1);
console.log(newArr);

//   4. Convert an array into one object.

let newObject = Object.assign({}, fill);
console.log(newObject);

// 5. Find out if an array is an array.
function arrChk(arr) {
  if (Array.isArray(arr)) console.log("yes indeed it's an array");
  else console.log("this is not an array");
}
const arr = '[2,7,9,9]';
const arr1 = ['a','b',2,2,3,4];
arrChk(arr); //no
arrChk(arr1);//yes


// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.


let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.slice();
newArray.push('shadi')

console.log({newArray});
console.log(oldArray);