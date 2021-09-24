const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Maria",
    birthday: "1-11-1978",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];


    // 1. Create a function that returns all the names from the array.

    // function arrName (arr){
    //     let newArr1 = [];
    //         arr.map(arr=> {
    //       return   newArr1.push({ name: arr.name})
    //     })
    //     return newArr1;
    // }
    
//     // console.log(arrName (data));

//     function returnNames (arr){
//         let tempr = [];
//         arr.map( a => tempr.push({name : a.name}))
//       return tempr;
//     }
//  console.log(returnNames(data));

    // 2. Create a function that returns all the objects that are born before 1990.

    // function arrDate (arr){
    //     let newArr2 = [];
    //     arr.forEach(element => {
    //         if (+(element.birthday.substr(-4)) < 1990);
    //             newArr2.push(element);
              
    //     });
    //     return newArr2;
    // };

    // function nineties (arr){
    //     let tempr2 =[];
    //     arr.filter( a => 
    //         console.log(a.birthday.split('-'));
    //         )
    // }
            
console.log(data.birthday.split('-'));

// console.log(arrDate(data));


// // 3. Create a function that returns an object of all the different foods from all
// // the objects as the key and the number of times that food is present in all the
// // // objects as the value.

// function food(arr) {
//     let newArr3 = {};
//     let result = (arr.map((ele)=> (ele.favoriteFoods.meats).concat(ele.favoriteFoods.fish))).join(",")
//     result.split(",").map(function(ele
//         ) {return newArr3[ele] = (result.split(',').filter(function(v) {return(v==ele)})).length })
//     return newArr3;
// }
// console.log(food(data));