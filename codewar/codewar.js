// ---------------task1---------------

// function sumStrings(a,b) { 
//     let num1=Number(a);
//     let num2=Number(b);
//     let sum1=num1+num2;
//     return ''+ sum1;

  
//   }
  
// console.log(sumStrings('2', '3'));

// ------------------task2---------------
 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"



// function likes(names) {
//     // TODO
    
//       if (names.length === 0)
//          return `no one likes this`
      
//       else if (names.length ===1)
//          return `${names} likes this`;
  
//       else if (names.length ===2)
//          return `${names[0]} and ${names[1]} like this`
  
//       else if (names.length ===3 )
//          return `${names[0]}, ${names[1]} and ${names[2]} like this`
      
//       else 
//          return  `${names[0]}, ${names[1]} and ${names.length-2} others like this`
//   }

// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }


console.log({A : 1, B : 2, C : 3, D : 4});
console.log(swap({A : 1, B : 2, C : 3, D : 4}));

function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}
