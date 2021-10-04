let persons = [
    {
        id: 1111,
        firstName: "itay",
        lastName: "tur",
        age: 30
    },
    {
        id: 1112,
        firstName: "avi",
        lastName: "tur",
        age: 35
    }
]

function addNewUser(input) {
    return new Promise((resolve, reject) => {
        const user = persons.find((u) => {
            return u.id === input.id
        })

        if (!user) {
            persons.push(input)
            resolve({action: 'success', data: input})
        } else {
            reject({action: 'error', data: 'user id exist'})
        }
    })
}

let newUser = {
    id: 1113,
    firstName: "avi",
    lastName: "tur",
    age: 35
}

addNewUser(newUser).then((request) => {
    console.log(request)
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log(persons)
})

// function getUser(age) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let user = persons.find((u) => {
//                 return u.age === age;
//             })
//             if (user) {
//                 resolve(user)
//             } else {
//                 reject('user not found')
//             }
//         }, 5000)
//     });
// }
//
//
// getUser(100).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// let userPromise =  new Promise((resolve, reject) => {
//    setTimeout(()=>{
//
//    },5000)
//     if(user){
//         resolve(user);
//     }
//     else{
//         reject('user not found')
//     }
// })
//
// userPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })