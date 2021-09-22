//block 1
var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); //result = 5 |  the variable result was declared and assigned the value of the function( firstresult) that it is also declared and assigned a function(someFunction) that returns an inner function(otherFunction) that returns the value of the variable b which was set to 5.

//block 2
var a = 1;

function b2() {
    a = 10;
    return;

    function a() {}

}
b2(); //returns undefined
console.log(a); //prints 1

//block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 5); //3,3,3| put the for(loop) inside the log(function) thus the for(loop) also gets timedout or remove the timeout because the default tim

}