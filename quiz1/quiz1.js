function isEven(num){
   return num % 2 ===0;
}

function tree(num) {
    
}

function avg(x,y){
    return(x+y)/2;
}

function bigger(one,two, three) {
    return Math.max (one, two ,  three);
    
}



function bigg (one, two , three ,four, five ,six) {
    if(bigger(one , two , three) >   bigger (four , five , six)){
        return bigger(one , two , three)
    }
    return bigger (four , five , six);
}

console.log("biggest :", bigg (10 ,40, 5 ,14, 20, 30));