function findSmallest(a, b, c){
    if (a > b && c> b){
    return b;
    } else if (a >c && b > c) {
    return c;
    } 
    else return a
    
    }
    console.log(findSmallest(66,2,56));



    // 1. First find the line that contains the problem. Write it down.
    // line 2
    //line 4
    // line 10
    // and the code is not giving the smallest number


    // 2. Which debug method did you use to find the bug?

    // we have used the nodejs internal vs code


    // // 3. Explain the bug in your own words.

    // for the first sight we will think its a regular code with 
    // typing mistake 
    // but when we fix  and run the code we didnt get the required result we got 66 instead of 2