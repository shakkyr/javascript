function printNumbers(n){
    
    for (i=0 ; i<=n ;i++) {
        if (i.includes(7)){
            console.log("boom");
        }

        // else if ((i%7 ==0) || (i.includes(7))) {
        //     console.log("boom,boom");
        // }
        else 
        {
        console.log(i);
    }    }
}
printNumbers(15);