//Block 1
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}
funcA(); // undefind,2| console log(a)  after intalizing

//Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function() {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test()); // aurelio de rosa,undefined| add () to line25 and remove () from line 26

//Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); // undefined | let variable is undefinde in the global block and is only accesable in the function block
console.log(typeof b); // number | b=0  is a global variable

//Block 4
function funcC() {
    console.log("1");
}
funcC(); // this activated the second function| we nee to change the function name

function funcC() {
    console.log("2");
}
funcC(); //this also activated the second function

//Block 5
function funcD1() {
    d = 1; // d is a global variable
}
funcD1();
console.log(d); // will print 1

function funcD2() {
    var e = 10; // e is now restricted to the functions block because it was declared inside the function block 

}
funcD2();
//console.log(e); //will print undefined 

//Block 6



function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();