function avrgTeam (p1, p2, p3) {
    return (p1 + p2 + p3)/3;
}

let johnTeam = avrgTeam(89, 120, 103);
let mikeTeam = avrgTeam(116, 94, 123);
let maryTeam = avrgTeam(97, 134, 105);
console.log("johnTeam :", johnTeam);
console.log("mikeTeam :", mikeTeam);
console.log("maryTeam :", maryTeam);

if (johnTeam > mikeTeam && johnTeam > maryTeam ){
    console.log('johnTeam won with score of :', johnTeam);
}
else if (johnTeam < mikeTeam && mikeTeam > maryTeam){
    console.log('mikeTeam won with score of :', mikeTeam);
}

else {
    console.log('its maryteam ');
}