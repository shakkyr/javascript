// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function checkNumber(n) {
    return new Promise((resolve,reject) => {
        if (n >10){
            resolve()
        }
        else {reject()
        };

    });
    
};
let num = 2;
checkNumber(num).then( ()=>console.log('greater than 10'))
.catch( () =>console.log('smaller than 10'))
