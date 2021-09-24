// // // // // // // // // // // // ---------------task1---------------

// // // // // // // // // // // // function sumStrings(a,b) {
// // // // // // // // // // // //     let num1=Number(a);
// // // // // // // // // // // //     let num2=Number(b);
// // // // // // // // // // // //     let sum1=num1+num2;
// // // // // // // // // // // //     return ''+ sum1;

// // // // // // // // // // // //   }

// // // // // // // // // // // // console.log(sumStrings('2', '3'));

// // // // // // // // // // // // ------------------task2---------------

// // // // // // // // // // // // []                                -->  "no one likes this"
// // // // // // // // // // // // ["Peter"]                         -->  "Peter likes this"
// // // // // // // // // // // // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // // // // // // // // // // // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // // // // // // // // // // // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// // // // // // // // // // // // function likes(names) {
// // // // // // // // // // // //     // TODO

// // // // // // // // // // // //       if (names.length === 0)
// // // // // // // // // // // //          return `no one likes this`

// // // // // // // // // // // //       else if (names.length ===1)
// // // // // // // // // // // //          return `${names} likes this`;

// // // // // // // // // // // //       else if (names.length ===2)
// // // // // // // // // // // //          return `${names[0]} and ${names[1]} like this`

// // // // // // // // // // // //       else if (names.length ===3 )
// // // // // // // // // // // //          return `${names[0]}, ${names[1]} and ${names[2]} like this`

// // // // // // // // // // // //       else
// // // // // // // // // // // //          return  `${names[0]}, ${names[1]} and ${names.length-2} others like this`
// // // // // // // // // // // //   }

// // // // // // // // // // // // function likes(names) {
// // // // // // // // // // // //     names = names || [];
// // // // // // // // // // // //     switch(names.length){
// // // // // // // // // // // //       case 0: return 'no one likes this'; break;
// // // // // // // // // // // //       case 1: return names[0] + ' likes this'; break;
// // // // // // // // // // // //       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
// // // // // // // // // // // //       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
// // // // // // // // // // // //       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }


// // // // // // // // // // // // ----------------7.6------------------------

// // // // // // // // // // // // console.log({ A: 1, B: 2, C: 3, D: 4 });
// // // // // // // // // // // // console.log(swap({ A: 1, B: 2, C: 3, D: 4 }));

// // // // // // // // // // // // function swap(json) {
// // // // // // // // // // // //   let ret = {};
// // // // // // // // // // // //   for (let key in json) {
// // // // // // // // // // // //     ret[json[key]] = key;
// // // // // // // // // // // //   }
// // // // // // // // // // // //   return ret;
// // // // // // // // // // // // }


// // // // // // // // // // // // function zero() {return 0}
// // // // // // // // // // // // function one() {return 1}
// // // // // // // // // // // // function two() {return 2}
// // // // // // // // // // // // function three() {return 3}
// // // // // // // // // // // // function four() {return 4}
// // // // // // // // // // // // function five() {return 5}
// // // // // // // // // // // // function six() {return 6}
// // // // // // // // // // // // function seven() {return 7}
// // // // // // // // // // // // function eight() {return 8}
// // // // // // // // // // // // function nine() {return 9}


// // // // // // // // // // // // function plus(y) {
// // // // // // // // // // // //     let x ;
// // // // // // // // // // // //     return x + y;
// // // // // // // // // // // // }
// // // // // // // // // // // // function minus(y) {
// // // // // // // // // // // //     let x ;
// // // // // // // // // // // //     return x - y;
// // // // // // // // // // // // }
// // // // // // // // // // // // function times(y) {
// // // // // // // // // // // //     let x ;
// // // // // // // // // // // //     return x * y;
// // // // // // // // // // // // }
// // // // // // // // // // // // function dividedBy(y) {
// // // // // // // // // // // //     let x ;
// // // // // // // // // // // //     return x / y;
// // // // // // // // // // // //  }

// // // // // // // // // // // // console.log(zero() *two() );
// // // // // // // // // // // let x = 'HELLO';
// // // // // // // // // // // function wave(str){
// // // // // // // // // // //     // Code here
// // // // // // // // // // //     str.toLowerCase();
// // // // // // // // // // //     // let newArr = [str]
// // // // // // // // // // //     // str.forEach(element => {
        

        
    
// // // // // // // // // // //     return str
// // // // // // // // // // //   }

// // // // // // // // // // //   console.log(wave(x.toLowerCase()));


// // // // // // // // // // // let num = "10";

// // // // // // // // // // // // Solution One
// // // // // // // // // // // console.log(+num + +num);

// // // // // // // // // // // let num1 = 10;
// // // // // // // // // // // let num2 = 20;
// // // // // // // // // // // console.log(typeof(num1 +'' +num2));


// // // // // // // // // // // let a = 10;
// // // // // // // // // // // let b = "20";
// // // // // // // // // // // let c = 80;
// // // // // // // // // // // console.log(++a + +b++ +c++ - +a++);

// // // // // // // // // // // let n = 1_00;
// // // // // // // // // // // console.log(Math.abs(n));


// // // // // // // // // // let a = 1_00;
// // // // // // // // // // let b = 2_00.5;
// // // // // // // // // // let c = 1e2;
// // // // // // // // // // let d = 2.4;

// // // // // // // // // // // Find Smallest Number In All Variables And Return Integer
// // // // // // // // // // console.log(Math.round(Math.min(a, b, c, d)));

// // // // // // // // // // // Use Variables a + d One Time To Get The Needed Output
// // // // // // // // // // console.log(a ** parseInt(d)); // 10000

// // // // // // // // // // // Get Integer "2" From d Variable With 4 Methods
// // // // // // // // // // console.log(parseInt(d));
// // // // // // // // // // console.log(Math.trunc(d));
// // // // // // // // // // console.log(Math.floor(d));
// // // // // // // // // // console.log(Math.round(d));

// // // // // // // // // // // Use Variables b + d To Get This Valus
// // // // // // // // // // console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// // // // // // // // // // console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number


// // // // // // // // // let userName = "Elzero";
// // // // // // // // // console.log(userName.charAt(0).toLowerCase()); // e
// // // // // // // // // console.log(userName.slice(3,4)); // e
// // // // // // // // // console.log(userName[0].toLowerCase()); // e
// // // // // // // // // console.log(userName.substr(0,1).toLocaleLowerCase()); // e
// // // // // // // // // console.log(userName.substring(0,1).toLocaleLowerCase()); // e
// // // // // // // // //  // eee



// // // // // // // // let word = "Elzero";
// // // // // // // // let letterZ = "z";
// // // // // // // // let letterE = "e";
// // // // // // // // let letterO = "O";

// // // // // // // // console.log(word.includes(letterZ)); // True
// // // // // // // // console.log(word.startsWith(letterE.toLocaleUpperCase)); // True
// // // // // // // // console.log(word.endsWith(letterO)); // True



// // // // // // // console.log(100 || "100"); // true
// // // // // // // console.log(100 < 1000); // true
// // // // // // // console.log(110 > 100 && 10 < 20); // true
// // // // // // // console.log(-10 == "-10"); // true
// // // // // // // console.log(-50 < +"-40"); // true
// // // // // // // console.log( 10 || -"-40"); // true
// // // // // // // console.log( "10" ?? 10); // true
// // // // // // // console.log(20 != false); // true


// // // // // // // var countBits = function(n) {
// // // // // // //   // Program Me
// // // // // // //       n.toString(2);
// // // // // // //       let x = 0;
// // // // // // //       for ( let i = 0 ; i < n.length ; i++) {
// // // // // // //         x += n[i];
// // // // // // //         return x ;
// // // // // // //       }
        
// // // // // // //       };
  
// // // // // // // // console.log(countBits(1234));

// // // // // // // function solution(a, b){
// // // // // // //   // your code here
// // // // // // //   let newArr = [];
// // // // // // // if ( a.length <= b.length) {
// // // // // // //   newArr.unshift(a);
// // // // // // //   newArr.push(a);
// // // // // // //   newArr.splice(1,0,b)
// // // // // // //   let final = newArr.join("");
// // // // // // // return final;
// // // // // // // }
// // // // // // // else if ( b.length <= a.length) {
// // // // // // //   newArr.unshift(b);
// // // // // // //   newArr.push(b);
// // // // // // //   newArr.splice(1,0,a)
// // // // // // //   let final = newArr.join("");
// // // // // // // return final;
// // // // // // // }

// // // // // // // }

// // // // // // // console.log(solution('11','2222'));


// // // // // // function splitAndAdd(arr, n) {
// // // // // //   let arr1 = [];
// // // // // //   let arr2 = [];
// // // // // //   let arr3 = []
// // // // // //   if (arr.length == 1)
// // // // // //     return arr;
// // // // // //   else {
    
// // // // // //     for (let i = 0; i < Math.floor(arr.length/2) ; i++){
// // // // // //       arr1.push(arr[i]);
// // // // // //     }
  
// // // // // //     for (let j = Math.floor(arr.length/2);  j < arr.length ; j++){
// // // // // //       arr2.push(arr[j]);
// // // // // //     }

// // // // // //         if (arr1.length == arr2.length)
// // // // // //             for (let k= 0 ; k < arr1.length ; k++ ){
// // // // // //               arr3[k] = arr1[k] + arr2[k]
// // // // // //             }
    
// // // // // //         return arr3 = [arr1]
// // // // // // }

// // // // // // console.log(splitAndAdd([10, 9, 11, 12, 14, 20, 30], 3));


// // // // // function sortItOut(array){
// // // // //   //Write your own code!
// // // // //     let oddArr= [];
// // // // //     let evenArr= [];
// // // // //     let arrFinal = [];
// // // // //     for ( let i=0 ; i< array.length ; i++) {
// // // // //           if (Math.floor(array[i]) % 2 == 1 )
// // // // //             oddArr.push(array[i]);
          

// // // // //           else if (Math.floor(array[i]) % 2 == 0 )
// // // // //             evenArr.push(array[i]);
    
// // // // //     };
// // // // //     oddArr.sort(function(a, b) {
// // // // //       return a - b;
// // // // //     });
// // // // //     arrFinal= arrFinal.concat(oddArr, evenArr.sort(function(a, b) {
// // // // //       return a - b;
// // // // //     }).reverse());
    
// // // // //     return arrFinal;
    
// // // // //   }
  

// // // // //   arr = [11,22,33,44,55,55,90.4,4,78];
// // // // //   console.log(sortItOut(arr));


// // // // function sumStrings(a,b) { 
// // // //   sum = +a + +b;
// // // //   return toString(sum);

// // // // }

// // // // log


// // // function pigIt(str){
// // //   //Code here
// // //   let newStr ;
// // //   str.forEach(element => {
// // //     if (element == 'string'){
// // //         element.s

// // //     }
// // //   });
// // // }


// // // function whatday(num) { 

// // //   // put your code here

// // //  let week= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // //  if (num <1 || num > 7)
// // //    return "Wrong, please enter a number between 1 and 7"
// // //  else
// // //   return week[num-1];

// // // }

// // // // console.log(whatday(8));

// // // function calculator(a,b,sign){
// // //   if (typeof a,b == 'number')
// // //   return a sign b;

// // // }
// // // // console.log(3,4,+);

// // // function simpleMultiplication(number) {
// // //   // your code........
// // // if (number % 2 ===0)
// // //    return Math.pow(number, 8);

// // // else return Math.pow(number, 9);
// // // }


// // // console.log(simpleMultiplication(2));


// // function sumMul(n,m){
// //   //your idea here
// //   let num = 0;
// //   if (n >=0 && m >=0){
// //         for ( let i = 1; (n * i)<= (m-1); i++){
// //            num +=  (n * i)
// //         }
        
// //       }
// //       else return 'INVALID';
// //       return num;
      
// //   }


// //   console.log(sumMul(3,13));


// function modifiedSum(a, n) {
//       let sum = 0;
//       let power = 0;
//   for ( let i =0 ; i<a.length ; i++){
//     sum += a[i];
//     power += Math.pow(a[i], n)

//   }
//   return power - sum ;
//   // Write your code here
// }

// console.log(modifiedSum([1, 2 ], 5));


// function findShort(s){
//   let arr = s.split(" ");
//   let resu = arr[0].length ;
//   for (let i = 0 ; i< arr.length ; i++){
//     if (arr[i].length < arr[0].length)
//           return arr[i].length -1;
//   }
// }

// a="bitcoin take over the world maybe who knows perhaps";
// console.log(findShort(a));

// function out (num){
//   function inside (int){
//   return  num * int /2 ;
//   }
//   return inside;
// }

// // let newvar = out (10);

// // console.log(newvar(4));
// console.log((0.1 + 0.2));

// function lastSurvivor(letters, coords) {
//          let new = letters.slice(1) 

// }

function lastSurvivor(letters, coords) {

  let i = 0;
  while (i <= coords.length){
          letters = letters.replace(letters[coords[i]],"");
          i++;
          
  }
  return letters;
  }
 


str='shadirada'
arr=[1,2,3,2];

console.log(lastSurvivor(str, arr));


// sadirada
// sairada
// saiada
// saada