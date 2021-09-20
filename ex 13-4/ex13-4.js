function steps(n) {
    for (let i = 0; i < n; i++) {
        let mySteps = ' ';      
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                mySteps += "#";
            } 
            }
            console.log(mySteps)
        } 
    }



steps(4);