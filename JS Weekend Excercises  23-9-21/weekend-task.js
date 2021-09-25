// // Ex1.1 - Yes or No
// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// // string for false.
const obj = {};
obj.isBoolean = (ele) =>  ele  ? 'yes':'no';
console.log(obj.isBoolean(10));
// obj = {
//     isBoolean :function (val) { 
//         console.log(val);
//         if (val )
//             return 'yes'
        
//         if (val == false)
//             return 'no'
        
//         }

// }
// console.log(9==true);
// console.log(obj.isBoolean(10))

// const obj={
//     isBoolean: function (val) {
//         if (val)
//         return 'Yes'
//         if (!val)
//         return 'No'
//     }
// }
// console.log(obj.isBoolean(0))



// console.log(obj.isBoolean(10));



// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ============================= A ==================================
lowestNumbersSum = (arr) => {
    arr = arr.sort((a,b)=> a-b);
    return arr[0] + arr[1];
}

console.log(lowestNumbersSum([19, 5, 42, 2, 77]));
console.log(lowestNumbersSum([10, 343445353, 3453445, 3453545353453]));


// ================================ B ======================================

function lowestNumbersSum1 (arr1, arr2) {
  
    
    return Math.min(...arr1) + Math.min(...arr2); 
}

console.log(lowestNumbersSum1 ([19, 5, 42, 2, 77], [10, 343445353, 3453445, 3453545353453]));//12



// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
// ======================= A ===================================
function binaryToInteger (arr) {
      let num = arr.join('');
     return parseInt(num,2);
}
// =========================== B  =================================
binaryToInteger1 =(arr) => {
    arr = arr.reverse();
    let sum= 0 ;
    for ( let i = 0 ; i < arr.length ; i++) {
            sum+= arr[i] * Math.pow(2,i);
    }
    return sum;
}


let arr9 = [1, 0, 0, 1];
let arr15 = [1, 1, 1, 1];
let arr2 = [0, 0, 1, 0];
console.log(binaryToInteger1(arr2));
console.log(binaryToInteger1(arr9));
console.log(binaryToInteger1(arr15));


console.log(binaryToInteger (arr9));//9
console.log(binaryToInteger (arr15));//15


// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
function returnPerfectSquare (n){
    if (Math.sqrt(n) % 1=== 0) {
        return (Math.sqrt(n)+1) * (Math.sqrt(n)+1);
       }
    else return -1
}

console.log(returnPerfectSquare (121));//144
console.log(returnPerfectSquare (625));//676
console.log(returnPerfectSquare (300));// -1



// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.


function findUniq (arr) {
        arr = arr.sort((a, b) => a - b);
        if (arr[0] !== arr[1]) {
          return arr[0];
        }
        else {
          return arr[arr.length - 1];
        }
      }
      

console.log(findUniq([0,1,0,0,0]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));


// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

function summation (n) {
    let num =0;
    for ( let i=0 ; i<= n ; i++){
        num += i;
    }
    return num;
}

console.log(summation (8));


// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)
function century (year){
    return `its the ${Math.ceil(year/100)} centure`;
}


console.log(century (200));
console.log(century (1601));


// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7



function calc (operator,value1,value2){
    let myOperator = {
      '+': (a,b) => a+b,
      '-': (a,b) => a-b,
      '*': (a,b) => a*b,
      '/': (a,b) => a/b,
    }
    return myOperator [operator](value1,value2);
    }

    console.log(calc ('+', 4, 7));
    console.log(calc ('-', 15, 18));





//     Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// - the function nb_year should return n number of entire years needed to get a population
// greater or equal to p.
// - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your
// function: if the parameter percent is 2 you have to convert it to 0.02.


    
  function nb_year (p0, percent, aug, p ){
       let num=0;
      while (p0 <= p){
          p0 = p0 + p0 * percent/100 + aug;
          num++;

      }
return num;

      }
  console.log(nb_year(1500, 5, 100, 5000));
  console.log(nb_year(1500000, 2.5, 10000, 2000000));



//   Ex3.2 - People on the Bus
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// ---------------------------- A -------------------------------
let stations = [[20, 0], [10, 7], [25,20], [10,15], [30,8]];
function busStation (arr){
    let remains = 0;
    arr.forEach(element =>  remains += element[0]-element[1]);
    return remains;
};

console.log(`THE REMAINING PEPOLE IN THE BuS are :${busStation (stations)}`);

// -------------------------- B ---------------------------------
// let stations1 = [(20, 15), (10, 7), (25,20), (10,15)];
// function checking(a,b) {
//     return a - b;
    
// }
// console.log(checking(stations1[0]));

// function busStations (arr) {
//     let remains = 0;
//     for (let i = 0 ; i < arr.length ; i++){
//         remains += checking(i);
//     }
//     return remains;
    
// }
// console.log(busStations(stations));




// Ex4.1 - Fibonacci -
// “Write a function to return an n element in Fibonacci sequence” is one of the most common
// questions you can hear during the coding challenge interview part. In this blogpost I’m going to
// walk through the two of the most typical solutions for this problem and also cover a dreadful (for
// most of novice developers) topic of time complexity.
// So what is a Fibonacci sequence? According to Wikipedia :
// “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
// called the Fibonacci sequence, and characterized by the fact that every number after the first
// two is the sum of the two preceding ones.”
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

function fibonacci(n){
    let arr = [0,1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n];
  }


  console.log(fibonacci(10));



//   Ex4.2 - Tribonacci -
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
// won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1]
// basically shifts the common Fibonacci sequence by once place, you may be tempted to think
// that we would get the same sequence shifted by 2 places, but that is not the case and we would
// get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then
// return an empty array (except in C return NULL) and be ready for anything else which is not
// clearly specified ;)



function tribonacci (n){
    let arr = [0,0,1];
    if (n == 0 ){
        return arr = [];
    }
    else if (isNaN(n)){
        return "it's not a number";
    }
    else {
    for (let i = 3; i < n + 1; i++){
      arr.push(arr[i-3] + arr[i - 2] + arr[i -1])
    }}
   return arr[n];
  }

  console.log(tribonacci (9));



//   Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.
function trimm (str) {
    return str.substring(1 , str.length-1)
    
}

function trimming (str) {
  let name =  str.split('');
       name.shift();
       name.pop();
    return name.join('');
}

console.log(trimm ('shadi'));
console.log(trimming ('shadi'));



// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
// -------------------- A --------------------
function repeat_str (times , str) {
    return str.repeat(times);
}
console.log(repeat_str (5 , 'i'));

// ------------------------- B ---------------------

function repeater( n , str) {
    let name ="";
    for (let i = 0 ; i < n ; i++ ){
        name += str;
        
    }
    
    return name.split(' ').join('');
}

console.log(repeater( 5 ,' i'));


// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
// ----------------------- A --------------------------------
function camel (str) {
    let spl = str.split('-');
    for (let i = 1 ; i < spl.length ; i++){
        spl[i] = spl[i].replace(spl[i][0], spl[i][0].toUpperCase())
    }
    return spl.join('');
    
}


// -----------------   B ----------------------------------
function toCamelCase( str) {
    let spl = str.split('-') ;
     let upper = spl.map(a => a.replace(a[0], a[0].toUpperCase()))
     return upper.join('');
    
}
console.log(camel ("the-stealth-warrior"));
console.log(toCamelCase( "the-stealth-warrior"));
console.log(camel ("The_Stealth_Warrior"));


// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
// ------------------------- A -----------------------------

function toWeirdCase (str) {
     return str.split(` `).map(a=>[...a].map((e,i)=>i%2?e.toLowerCase():e.toUpperCase()).join(``)).join(` `);
 
    // return (...str).map((a,i) => i % 2 ? a.toUpperCase() a.toLowerCase()).join('');

}

console.log(toWeirdCase ("Weird string case"));
// ------------------------------- B -------------------------------
const casesW = (str) => {
    let  newString = [];
    for( let i in str ) {
        if(i%2 == 0){
            newString.push(str[i].toUpperCase());
        } else {
            newString.push(str[i].toLowerCase());
        }
    }
    return newString.join('');
};

console.log(casesW('Weird string case'));



// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6


nickNames = (str) => {
    let newStr = str.split(' ');
    // let first = newStr.shift().toUpperCase();
  
    // let second = newStr.shift().toUpperCase();
  return newStr[0][0] +'.'+ newStr[1][0];
    
}

console.log(nickNames ('Sam Harris'));


// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"


// maskify = (str) => {
//     // if (str.length <= 4) return str;
//     // else {
//     // for (let i= 0; i < str.length -4 ; i++){
//     //      str.replace(str[i], '#');
//     // }}
//     // return str;
// }

maskify = (str) => {return str.slice(0, -4).replace(/./g, '#') + str.slice(-4)};



console.log(maskify("45asdsad334"));


function maskify2(str) {
    return str.length <= 4 ? str : "#".repeat(str.length - 4) + str.substr(str.length - 4);
  }
  console.log(maskify2("1234325346534"));



//   Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

let word = 'aaa bbbb sssss dasfaf sdgsdgsgsgdsd dada av';

// ------------------------- A --------------------------------
shortWord = (str) => {
let newWord = str.split(' ');
let shortest = 1000;
let theWord ='';
for (let i=0; i < newWord.length ; i++){
    if ( newWord[i].length < shortest){
            shortest = newWord[i].length;
            theWord = newWord[i];
            
    }
}

return theWord;
}


console.log(shortWord(word));

// ----------------------------- B -----------------------------
shortWord2 = (str) => {
   return str.split(' ').sort(function(a, b){return b.length - a.length}).pop(); // ordered from longest to shortest
}

console.log(shortWord2(word));


// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

shortWord3 = (str) => {
    return str.split(' ').sort(function(a, b){return b.length - a.length}).shift(); // ordered from longest to shortest
 }
 
 console.log(shortWord3(word));


//  Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum :
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z .


accum = (str) => {
    let newStr = str.split('');
    let myArr = [];
    for ( let i = 0 ; i< newStr.length ; i ++){
            myArr.push(newStr[i].repeat(i+1).replace(newStr[i][0], newStr[i][0].toUpperCase() ));
    }
    return myArr.join('-');
}

console.log(accum("RqaEzty"));
console.log(accum("cwAt"));


// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// ---------------------- ------ A ---------------------------------
duplicated1 = (str) => {
    let count =[];
    let newArr = str.toLowerCase().split('');
    newArr.forEach(element => {
        if (count.includes(element)){}
        
        else count.push(element);
        
    });
    
    
    return count.length;
}



console.log(duplicated1("222333344445555"));
console.log(duplicated1("aabBcde"));


// ------------------------------------- B --------------------------------
duplicated2 = (str) =>{
    
    let result = 0,
    soltingObject = {};
     str.toLowerCase().split('').map(str => {
    if (!soltingObject.hasOwnProperty(str)) {
      soltingObject[str] = 0;
    } else {
      if (soltingObject[str] === 0) {
        result += 1;
      }
      soltingObject[str] = soltingObject[str] + 1;
    }
});
return result;
}

    console.log(duplicated2("222333344445555"));


//     Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
let c= "abcdefghijklmnopqrstuvwxyz"

longest = (a,b) => {
    let myArr = a.split('').concat(b.split('')).sort();
    let connected = [];
    myArr.forEach(element => {
        if (connected.includes(element)){
           
        }
        else  connected.push(element);
    });
    return connected.join('');
}


console.log(longest (a,b));
console.log(longest (c,c));


// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

isIsogram = (str) => {
    let arr = [];
    str= str.toLowerCase().split('');
    str.forEach(element => {

            if ( arr.includes(element)){}


            else arr.push(element);
        
    });
    return arr.length == str.length;
}

console.log(isIsogram("moOse"));
console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));


// ================ A ==========================
isIsogram1 = (str) => {
    let myStr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if(myStr == null){
    return true} else{
    return false;
    }
}

console.log(isIsogram1("moOse"));
console.log(isIsogram1("aba"));
console.log(isIsogram1("Dermatoglyphics"));

// ========================== B ================================
isIsogram2 = (str) => {
    str = str.toLowerCase().split("")
    let result = str.reduce((a, b) => {
      !a.includes(b) && a.push(b);
      return a;
    }, []);
    return result.length === str.length;
  }
  console.log(isIsogram2("moOse"));
  console.log(isIsogram2("aba"));
  console.log(isIsogram2("Dermatoglyphics"));


//   Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// =========================== A Filter ===========================================
filter = (arr, callBack ) => {
    let myArr = [];
    for (let i = 0 ; i < arr.length ; i++){
            if (callBack(arr[i])){
                myArr.push(arr[i])
            };
    }
    return myArr
};

checkEven = a =>  a%2===0;
duble = a => a*2;

console.log(filter(x,checkEven));
// ============================== B forEach =======================================
foreach = (arr, callBack ) => {
    
    for (let i = 0 ; i < arr.length ; i++){
            callBack(arr[i], i )
    }
};





// ================================= C Map =========================================
mapp = (arr, callBack ) => {
    let myArr = [];
    for (let i = 0 ; i < arr.length ; i++){
            
                myArr.push(callBack(arr[i]))
            };
            return myArr;
    };
    

console.log(mapp(x, duble));



// Ex 8 - Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// f ➞ 26
// indPerimeter(6, 7)
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
// Notes
// ● Don't forget to return the result.
// ● If you're stuck, find help in the Resources tab.
// ● If you're really stuck, find solutions in the Solutions tab.

rectanglePerimeter = (length, width) => {
    return (length + width) *2;
}

console.log(rectanglePerimeter(20 , 10));