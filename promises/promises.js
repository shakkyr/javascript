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

//! ====================== 2 =====================================
//? ===========================================================
const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolve();
			}
			else {
				reject();
			}
		}, 5000);
	});
};
makeDogPromise()
	.then(() => {
		console.log('YAY WE GOT A DOG!!!!');
	})
	.catch(() => {
		console.log(':( NO DOG');
	});


    // ! ========================= 3 ====================================
    //! ========================================================================

    //This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});


    //! =============================== 4 ======================================
    //! ========================================================================

    //This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('OH NO!', err);
	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});


//! =============================== 5 =================================
//! ======================================================================
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
moveX(btn, 100, 1000)
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.catch(({ bodyBoundary, amount, elRight }) => {
		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );


function isMoreThenTen(number) {
    return new Promise(((resolve, reject) => {
        if(number > 10)
            resolve('is more then 10');
        reject('is even or less then 10')
    }))
}

isMoreThenTen(8).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

isMoreThenTen(20).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

const arrayOfWords = ["cucumber", "tomatos", "avocado"];

const makeAllCaps = (arrayOfWords) => {
    return new Promise(((resolve, reject) => {
        let capsString = arrayOfWords.map((item) => {
            return typeof item === "string" ? item.toUpperCase() : reject('error : not all items are string')
            // if(typeof item === "string"){
            //     return item.toUpperCase()
            // }
            // reject('error : not all items are string')
        })
        resolve(capsString)
    }))
}

const sortStrings = (stringArr) => {
    return new Promise(((resolve, reject) => {
        if (stringArr) {
            let capsString = stringArr.map((item) => {
                return typeof item === "string" ? item : reject('error : not all items are string')
                // if(typeof item === "string"){
                //     return item.toUpperCase()
                // }
                // reject('error : not all items are string')
            })
            resolve(capsString.sort())
        }
        reject('empty array')
    }))
}

makeAllCaps(arrayOfWords).then((output) => {
    sortStrings(output).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
}).catch((err) => {
    console.log(err)
})



