// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const list = ['shadi', 'adeeb', 'seham', 'timor'];
const list1 = ['shadi', 'adeeb', 'seham', 'timor', 32];


function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
     let   newArr = arr.map(ele => typeof(ele) === 'string' ? ele.toUpperCase() : reject('not all is strings') ) 
        resolve(newArr);
    })
    
    

    
};
function sortWords(arr) {
    return new Promise((resolve,reject) => {
      resolve(arr.sort());
      reject()
    });
  }
makeAllCaps(list1).then((data)=> console.log(data)).catch((error)=>console.log(error) )
sortWords(list).then((console.log(list) ))