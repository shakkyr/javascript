// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.



let arr=[5,5,8,7,-1,5];

let bestAvgJump=arr=>{
    let tempArr=[]
    let sum=0;
    let counter=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===-1){
            counter+=1;
        }
        else sum+=arr[i];
        if((i+1)%3===0){
            temp.push(sum/(3-counter));
            sum=0,counter=0;
        }
    }
    return temp;
}
// this also works for the best jump just send the right arr
let bestAvg=arr=>{
    let max=0;
    arr.forEach(i => {
        max=Math.max(max,i);
    });
    return max;
}
arrAvg=bestAvgJump(arr);
console.log(arrAvg);
console.log(bestAvg(arrAvg));
console.log(bestAvg(arr));

// the perfect solutuion ____________----------------------------------------
// const jumArray = [10, 5, 8, 7, -1, 5, 3, 4, 5];
// const avgJumper = (arr) => {
//   let tempArr = [];
  
//   for (let i = 0; i < arr.length; i += 3) { 
//     let numberOfValidJumps = 0;
//     let sum = 0;
//     if (arr[i] !== -1) {
//       sum = sum + arr[i];
//       numberOfValidJumps += 1;
//     }
//     if (arr[i + 1] !== -1) {
//       sum = sum + arr[i + 1];
//       numberOfValidJumps += 1;
//     }
//     if (arr[i + 2] !== -1) {
//       sum = sum + arr[i + 2];
//       numberOfValidJumps += 1;
//     }
//     if (
//       sum / numberOfValidJumps === 0 ||
//       sum / numberOfValidJumps === null ||
//       sum / numberOfValidJumps === undefined ||
//       sum / numberOfValidJumps === Infinity ||
//       sum / numberOfValidJumps < 0
//     ) {
//       tempArr.push('vary bad jumper!');
//     } else {
//       tempArr = [...tempArr , sum / numberOfValidJumps]
//       // tempArr.push(sum / numberOfValidJumps);
//     }
//   }

//   return tempArr
// };

// // console.log(avgJumper(jumArray)); 
// const bestAvgJump = (avjJump) => {
//   let bestJump = avjJump[0]
//   for(let i=1; i<avjJump.length; i++){
//     if (avjJump[i] > bestJump){
//       bestJump = avjJump[i]
//     }
//   }
//   return bestJump;
// }
// // console.log(Math.max(...avgJumper(jumArray))); 

// // console.log(Math.max(...jumArray)); 

// console.log(avgJumper(jumArray))
// console.log(...avgJumper(jumArray))












//     let jump1 = [];
//     let jump2 = [];
//    for (let i=0 ; i <=2 ; i++){
//     if (arr[i] >= 0){
        
//        jump1.push(arr[i]);
//        console.log(arr[i]);
//     }
//    }

//    for (let i=3 ;i < arr.length ; i++) {
//        if (arr[i] >= 0){
//     jump2.push(arr[i]);
//     console.log(arr[i]);
//        }
//    }

// //    function avgJumper (jump1 , jump2){
// //        let avrg = [];
// //        jump1.forEach((item)=>{
// //          let summ1 += item;
// //         avrg.push();
// //     }
// // )
           
// //    }
// console.log(jump1);
// console.log(jump2)














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





