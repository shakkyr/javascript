const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
// ------------------ 1 ------------------------------
function getCandy(candyStore, id) {
  let resid;
  candyStore.candies.forEach((element) => {
    if (element.id == id) {
      resid = element;
    }
  });
  return resid;
}

// console.log(getCandy(candyStore, "as12f"));

// ---------------------- 2----------------------------

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}

// let resid;
// candyStore.candies.forEach(element => {
//     if (element.id == id){
//         resid = element.price ;
//     }
// });
//     return resid;
// }

// console.log(getPrice(candyStore, "as12f"));

// ----------------------------- 3 --------------------------------

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amoint: 1 });
}

// console.log(addCandy(candyStore,'13abs','choc',20));
// console.log(candyStore);


// ------------------- 4 ---------------------------------------

function buy(candyStore, id){
    candyStore.candies.forEach(element => {
          if  (element.id === id) {
          element.amount-- ;
          candyStore.cashRegister += element.price;
          }
    });
  }

  console.log(candyStore);
  console.log(buy(candyStore,'as12f'));
  console.log(candyStore);
