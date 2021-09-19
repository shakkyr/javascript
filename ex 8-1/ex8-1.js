const obj1 = {
    name : 'shadi'
}

const obj2 = {
    name : 'aws'
}

const obj3 = {
    name : 'mays'
}

// const allOb = {
//     opj1 : 1,
//     obj2 : 2,
//     obj3 : 3
// }

let allObj = new Map();
allObj.set(obj1, 1);
allObj.set(obj2, 2);
allObj.set(obj3, 3);

for ( let [key, value] of allObj)
        console.log(key.name + ':' + value);


