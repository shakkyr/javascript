function print (a){
    console.log(a);
}


function isString (a , print){
    if ( typeof(a) === 'string')
        return print(a);
}

console.log(isString('shadi', print));

function spread (str1){
    return str1.join('-');
}


function firstWordUpperCase (str1 , spread){ 
        let newStr = str1.split(' ');
       let first = newStr.shift();
         newStr.unshift(first.toUpperCase());

        
        
    
    return spread(newStr);
}
console.log(firstWordUpperCase ('shadi naman rada', spread));



