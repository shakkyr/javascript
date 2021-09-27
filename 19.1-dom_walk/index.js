let start = document.querySelector('.start-here');
    

// 1. Change the text from “title 2” to “main title”

start.innerHTML ='main title';

// 2. Add another sub title with the text “sub title 4”
let allUls = document.querySelectorAll('ul'),
    allLis = document.querySelectorAll('li');

title4 = document.createElement('li');
allUls[1].appendChild(title4);
title4.innerHTML = 'sub title 4';

// 3. Delete the last <li> element from the list.
let firstUl = document.querySelector('ul');
firstUl.removeChild(firstUl.lastElementChild)


// 4. Change the <title> element text to “Master Of The Dom”.

document.title ='Master Of The Dom'


// 5. Change the text of the <p> element ot something else of your

document.querySelector('p').innerHTML = 'we are champions'


