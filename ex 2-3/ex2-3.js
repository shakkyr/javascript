function calcrad(x) {
    return Math.pow(x,2) *2 * Math.PI;
}

radi1 = calcrad(-4);

function roundToTwo(radi1) {
    return +(Math.round(radi1 + "e+2")  + "e-2");
}
console.log("the circle area :", radi1);
console.log("the rounded area : ", roundToTwo(radi1));