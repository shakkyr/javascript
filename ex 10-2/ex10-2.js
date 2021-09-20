// ---------------------------- 1------------------------------
let myarr = [2, 4, 5 , 6, 7];


function doubleValues (arr){
    let newArr = arr.map( n=>{
        return n * 2})
    return newArr;
}

console.log(doubleValues (myarr));
// ------------------------------------ 2 --------------------------
function onlyEvenValues (arr2) {
    let odds = arr2.filter( n=> {

        return (n % 2 ==0)
        
    })
    return odds;
}

console.log(onlyEvenValues(myarr));
// -------------------------------------- 3 ---------------------------
let myarr2 = [2, 4, 5 ,'start', 'boy', 'girl', 'end', 6, 7];
function showFirstAndLast (arr3) {
        let arrOf2 = arr3.filter( n => {
            return typeof(n) ==='string';
        })

        return [arrOf2[0],arrOf2[arrOf2.length -1] ];
            };


console.log(showFirstAndLast(myarr2));

// ---------------------------- 4 --------------------------
let voTese = 'hello my name is shadi'


function voFind (str){
    let arrOfVows = voTese.split('');
    const vowObj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
}
arrOfVows.filter(letter => vowObj.hasOwnProperty(letter) ? vowObj[letter]++ :"");
return vowObj;
}

console.log(voFind(voTese));





// ----------------------------- 5 ---------------------------

let nam = 'shadi neuman rada';
function capital (str) {
    let wordsArray = str.toUpperCase().split(' ')

    let capsArray = wordsArray.map( word=>{
        return  word.replace(word[0], word[0].toUpperCase())
    })

    return capsArray.join(' ')
    }
console.log(capital(nam));



// ----------------------------- 6 -----------------------------------

let nam1 = 'shadi neuman rada';
function shiftLetters(str) {
let strArray = str.toLowerCase().split("");

let letterChange = strArray.map(function(value, index){
    if(str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122){
      return value
    }else{
      return String.fromCharCode(str.charCodeAt(index)+1)
    }
});
return letterChange.join('');
}

console.log(shiftLetters(nam1));
//     let namArr = str.split('');
//     let newa = namArr.map(a => a.fromCharCode(a.charCodeAt(index)-1));
//     return newa
// }
// console.log(shiftLetters(nam1));



// let strArray = str.toLowerCase().split("");

// let letterChange = strArray.map(function(value, index, array){
//     if(str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122){
//       return value
//     }else{
//       return String.fromCharCode(str.charCodeAt(index)+1)
//     }
// });



// --------------------------------- 7 -----------------------------------------------

let nam2 = 'shadi neuman rada will become better in the close future';

function swapCase (str) {
    let newArr = str.split(' ');
   let final = newArr.map((a,b) => a.toUpperCase());
    return final;
        
    });
}

console.log(swapCase (nam2));