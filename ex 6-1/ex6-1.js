const arr=[1 ,7 ,3, 0, -5, 7, 3, 9];
let length=0;
let summ = 0;
let multi= 1;
for (let i=0; i< arr.length  ; i++){
    console.log("array element :",arr[i]);
     length=1+ i;
     summ = summ + arr[i];
     multi = multi * arr[i];

 }

function arrayLength (arr){
      return length;
}

function arraySum (arr) {
   return summ;
}

function arrayMulti (arr) {
    return multi;
}

console.log("here you git the array length ",arrayLength(arr));
console.log("here you git the array elements sum ",arraySum(arr));
console.log("here you git the array elements multibli ",arrayMulti(arr));