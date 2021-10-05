let foodAvailable = true;
let waterAvailable = true;
let bedAvailable = true;

function eat() {
  return new Promise(function(resolve, reject){
    if(foodAvailable) {
      resolve("I finished eating");
    } else {
      reject("No food to eat");
    }
  })
} // eat()

function drink() {
  return new Promise(function(resolve, reject){
    if(waterAvailable) {
      resolve("I finished drinking");
    } else {
      reject("No water to drink");
    }
  })
} // drink()

function sleep() {
  return new Promise(function(resolve, reject){
    if(bedAvailable) {
      resolve("I am sleeping now");
    } else {
      reject("There's no bed to sleep");
    }
  })
} // sleep()

// 1st method (without async/await)
eat().then(function(eatMessage) {
  console.log(eatMessage);
  drink().then(function(drinkMessage){
    console.log(drinkMessage);
    sleep().then(function(sleepMessage){
      console.log(sleepMessage);
    }).catch(function(sleepErrorMessage){
      console.log(sleepErrorMessage);
    })
  }).catch(function(drinkErrorMessage){
    console.log(drinkErrorMessage);
  })
}).catch(function(eatErrorMessage) {
  console.log(eatErrorMessage);
});


// 2nd method (using async/await)
async function eatDrinkSleep() {
  try {
    let eatMessage = await eat();
    console.log(eatMessage);
    let drinkMessage = await drink();
    console.log(drinkMessage);
    let sleepMessage = await sleep();
    console.log(sleepMessage);
  }
  catch(errorMessage) {
    console.log(errorMessage);
  }
}

eatDrinkSleep();