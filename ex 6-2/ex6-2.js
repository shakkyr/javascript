const people = ["Greg", "Mary", "Devon", "James"];
for (let i=0 ; i< people.length ; i++){
    // 1. Using a loop, iterate through this array and console.log all of the people.
    console.log("the main array people names:",people[i]);
    
}
// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log("first element removed",people);

// 3. Write the command to remove "James" from the array.
people.splice(-1);
console.log("last element removed:",people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift('Matt');
console.log('Matt added to the start of the array:',people);


// 5. Write the command to add your name to the end of the array.
people.push('Shadi');
console.log("Shadi added to the end of the array:",people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.

for(let i=0 ; i < people.length ; i++){
      if(people[i] !=='Mary')
       console.log("marry removed from printing",people[i])
        }
    console.log('Mary not printed with the others:');
    



    // 7. Write the command to make a copy of the array using slice. The copy
    // should NOT include "Mary" or "Matt".

    let peopleCopy = people.slice(2, 4)
    console.log('this our main array',people);
    console.log('and this is a copy of it',peopleCopy);
    
    
    // 8. Write the command that gives the indexOf where "Mary" is located.

    console.log('index of Mary ',people.indexOf('Mary'));
   

    //9. Write the command that gives the indexOf where "Foo" is located (this
    //     should return -1).

    console.log('index of Foo ',people.indexOf('Foo'));


    // 10. Redefine the people variable with the value you started with. Using the
    // splice command, remove "Devon" from the array and add "Elizabeth"
    // const people = ["Greg", "Mary", "Devon", "James"];
    // and "Artie". Your array should look like this when you are done ["Greg",
    // "Mary", "Elizabeth", "Artie", "James"].

    people.splice(2,1,"Elizabeth", "Artie");
    console.log('Devon replaced with Elizabeth and Artie:',people);


//     11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".

     let withBob = people.concat("Bob");










// let indexToRemove = people.indexOf("Mary")
// people.splice(indexToRemove, 1);
// console.log(people);