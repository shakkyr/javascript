// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function checkNumber(n) {
    return new Promise((resolve,reject) => {
        if (n >10){
            resolve( 'greater than 10')
        }
        else {reject('error the number is smaller than 10 ')
        };

    });
    
};
checkNumber(2).then( (res)=>console.log(res))
.catch( (error) =>console.log(error))
