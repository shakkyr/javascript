let number = 7;
number = number.toString();


function printNumbers(n){

    
    for (let i=0 ; i<=n ;i++) {
        if (i%7 ===0 && i.toString().includes('7')) {
            console.log("boom,boom", i);
        }
       
        else if (i % 7 === 0 ){
            console.log("boom", i);
        }

            
        else 
        {
        console.log(i);
    }    }
}
printNumbers(15);