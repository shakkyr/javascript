function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
    getSum([1,2,3],[5,66,23]);


    console.log(getSum([1,2,3],[5,66,23]));

    // // // 1. First find the line that contains the problem. Write it down.
    // //   line 2
    //      line 9
    // //   line 10
    // //


    // 2. Which debug method did you use to find the bug?
    // we used the internal deboger of vs code using nodjs\\


    // 3. Explain the bug in your own words.
    // line 2 first they had declared an variable 'sum "that it has to change with const
    //line 9 they didnt tell the function what value to return
    // line 10 then they added to arrays to a variable without ","