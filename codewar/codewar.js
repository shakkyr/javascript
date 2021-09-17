// // ---------------task1---------------

// // function sumStrings(a,b) {
// //     let num1=Number(a);
// //     let num2=Number(b);
// //     let sum1=num1+num2;
// //     return ''+ sum1;

// //   }

// // console.log(sumStrings('2', '3'));

// // ------------------task2---------------

// // []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// // function likes(names) {
// //     // TODO

// //       if (names.length === 0)
// //          return `no one likes this`

// //       else if (names.length ===1)
// //          return `${names} likes this`;

// //       else if (names.length ===2)
// //          return `${names[0]} and ${names[1]} like this`

// //       else if (names.length ===3 )
// //          return `${names[0]}, ${names[1]} and ${names[2]} like this`

// //       else
// //          return  `${names[0]}, ${names[1]} and ${names.length-2} others like this`
// //   }

// // function likes(names) {
// //     names = names || [];
// //     switch(names.length){
// //       case 0: return 'no one likes this'; break;
// //       case 1: return names[0] + ' likes this'; break;
// //       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
// //       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
// //       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
// //     }
// //   }


// // ----------------7.6------------------------

// // console.log({ A: 1, B: 2, C: 3, D: 4 });
// // console.log(swap({ A: 1, B: 2, C: 3, D: 4 }));

// // function swap(json) {
// //   let ret = {};
// //   for (let key in json) {
// //     ret[json[key]] = key;
// //   }
// //   return ret;
// // }


// // function zero() {return 0}
// // function one() {return 1}
// // function two() {return 2}
// // function three() {return 3}
// // function four() {return 4}
// // function five() {return 5}
// // function six() {return 6}
// // function seven() {return 7}
// // function eight() {return 8}
// // function nine() {return 9}


// // function plus(y) {
// //     let x ;
// //     return x + y;
// // }
// // function minus(y) {
// //     let x ;
// //     return x - y;
// // }
// // function times(y) {
// //     let x ;
// //     return x * y;
// // }
// // function dividedBy(y) {
// //     let x ;
// //     return x / y;
// //  }

// // console.log(zero() *two() );
// let x = 'HELLO';
// function wave(str){
//     // Code here
//     str.toLowerCase();
//     // let newArr = [str]
//     // str.forEach(element => {
        

        
    
//     return str
//   }

//   console.log(wave(x.toLowerCase()));


// let num = "10";

// // Solution One
// console.log(+num + +num);

// let num1 = 10;
// let num2 = 20;
// console.log(typeof(num1 +'' +num2));


// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + +b++ +c++ - +a++);

// let n = 1_00;
// console.log(Math.abs(n));


let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number