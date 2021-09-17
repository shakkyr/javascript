// reate a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:


const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
// let newArr = array.map(v => v.toLowerCase()).join('').split('');
let newStr = array.join('').split(' ').join('');

// let countr = arr => {
//     let newStr = arr.join('').split(' ').join('');
//     let finObject = {};
//     newStr.forEach(letter => {
//         if ( letter )
//     });
    
//     return finObject; 
//     };
let countr = arr => {
    let newStr = arr.join('').split(' ').join('');
    let finObject = {};
    for ( let i = 0 ; i < newStr.length ; i++ ) {
        if (newStr.charAt(i) in finObject)
            finObject[newStr[i]] +=1;
        
        else finObject[newStr[i]]  = 1;
    }
    
    return finObject; 
    };
    


console.log(array);
console.log(newStr);
console.log(countr(array));





// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive

// Extra:
// return the letter with the most occurrences as well