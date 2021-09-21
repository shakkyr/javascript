function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum /arr.length;
    }
    console.log(calcAverage ([ 85 , 90 , 92 ]));



// //     What is wrong with this code?
// // 1. First find the line that contains the problem. Write it
// line 2
// line 5
// // down.

// // 2. Which debug method did you use to find the bug?
// nodejs vs code internal debugger

// // 3. Explain the bug in your own words.
// line 2 sum is not defined that way shoud give it a value
// line 5 we shoud write sum / arr.length