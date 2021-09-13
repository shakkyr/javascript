function leapYear (n) {
    if ((n % 4 ==0) && (n % 100 !=0) || (n % 400 ==0) ) {
        console.log(n, "its a leap year");
    }
    else {
        console.log(n, "its not");
    }
}

leapYear(2100);