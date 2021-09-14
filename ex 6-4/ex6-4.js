// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.

const arr = [5,5,8,7,-1,5];

    let jump1 = [];
    let jump2 = [];
   for (let i=0 ; i <=2 ; i++){
    if (arr[i] >= 0){
        
       jump1.push(arr[i]);
       console.log(arr[i]);
    }
   }

   for (let i=3 ;i < arr.length ; i++) {
       if (arr[i] >= 0){
    jump2.push(arr[i]);
    console.log(arr[i]);
       }
   }

//    function avgJumper (jump1 , jump2){
//        let avrg = [];
//        jump1.forEach((item)=>{
//          let summ1 += item;
//         avrg.push();
//     }
// )
           
//    }
console.log(jump1);
console.log(jump2)














// let sum1 = 1;
// let tot1 = 1;
// let sum2 = 1;
// let tot2 = 1; 
// function avgJumper (arr) {
//    let avJump = []; 

//        for (let i=0 ; i <=2 ; i++){
//            if (arr[i] >= 0){
//                 sum1 += arr[i];
//                 tot1 ++;
//                    }
//                avJump.push(sum1/tot1);
//             }
            
//             for (let j=3 ;j < arr.length ; j++) {
//                 if (arr[j] >= 0){
//                     sum2 += arr[j];
//                     tot2 ++;
                    
//                    }
//                    avJump.push(sum2/tot2);
//                 }
// return avJump;  
//   }
  



// console.log(avJump);





