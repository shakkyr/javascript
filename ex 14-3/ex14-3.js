function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    };
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));




    // 1. First find the line that contains the problem. Write it down.
    // line 2


    // 2. Which debug method did you use to find the bug?
    // internal nodejs deboger


    // 3. Explain the bug in your own words.

    // illegal return statement cant return arr[10] the lenght of arr is different the index
