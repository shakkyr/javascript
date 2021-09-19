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


function shiftLetters(str) {
    
}