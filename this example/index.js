function person () {
    this.age = 0;
    

    setInterval(() => { // we used arrow functoin here because it dosn't have this so it will take the parent this and work fine
        this.age++;
        console.log(this.age);
    }, 1000);
    
}


let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

// ============= spread ====================

console.log([].concat(arr1,arr2));// to compine to arrays in new one
console.log([...arr1,...arr2]);// will do spread to the arrays like above


// ================= rest operator =====================

function filter (...args) {// this method with function will transform the numbers into an array
    console.log(args);
    
}

filter(1,2,3,4,5,6); // will print [1,2,3,4,5,6]


function filter1 (...args) {// this method with function will transform the numbers into an array
    return args.filter(n => n > 3);
    
}

console.log(filter1(1,2,3,4,5,6)); // will print numbers biggetr than 3


// ================ destruction =========================
let arr10 = [1,2,3];
let [x,y,z] = arr10; // new ways eqma6
console.log(x,y,z);

let person2 = {
    name: 'shadi',
    age : 34
}

let {name,age} = person2;
console.log(name,age);