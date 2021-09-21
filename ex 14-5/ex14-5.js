function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter+=1 ;
    }} return counter ;
    }
    console.log( countOccurrences ( "ini mini miny moe" , "n" ));



    // 1. First find the line that contains the problem. Write it
    // down.

    // line 2 
    // line 5

    // 2. Which debug method did you use to find the bug?

    // used nodejs internal vs code debugger

    // 3. Explain the bug in your own words.

    // line 2 the counter not difined with integer value so it took undefined
    // line 5 is not adding 1  it because the sytnex shoud write ++ or +=instead of +1
    //                  so the condition that males line 5 run is not happening
    