let score = function(x) {
    if (x >= 90){
        return (x, 'your score is a A')
    }
    if (x >= 80 && x <= 89){
        return (x, 'your score is a B')
    }
    if (x >= 70 && x <= 79){
        return (x, 'your score is a C')
    }
    if (x >= 65 && x <= 69){
        return (x ,'your score is a D')
    }
    if (x >= 0 && x <= 64){
        return (x, 'your score is a F')
    }
    
}

console.log(score(f));