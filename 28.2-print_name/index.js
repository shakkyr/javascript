// The following exercise contains the following subjects:
// bind, call, apply
// Instructions
// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const myObj = {
    name : 'shadi',
    first : function () {
        console.log(this.name);
        
    },
    second : function () {
        setTimeout((this.first.bind(myObj)),1000) 
        
    }
}


myObj.first();
myObj.second();