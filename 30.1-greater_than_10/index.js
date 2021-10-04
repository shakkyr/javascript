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
checkNumber(2).then( (data)=>console.log(data))
.catch( (error) =>console.log(error))


//! ================================= adeeb ========================================
//! ===========================================================================
function numIsGreaterThan10(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) { resolve(true) } else if (num == 10) { resolve('equal') } else { reject() }
    })
}
numIsGreaterThan10(11).then((res) => console.log(res)).catch(() => console.log(false))


//! ================================= timor ================================
function greater(n) {
    return new Promise(((resolve, reject) => {
        if (n > 10) {
            resolve(`${n} is greater than 10.`);
        } else if (n == 10){
            resolve(`${n} is equal than 10.`);
        } else {
            reject(`${n} is smaller than 10.`);
        }
    }))
}

greater(5).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})
