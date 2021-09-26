let myMainElement = document.createElement('div');
let myHeadind = document.createElement('h2');
let myParagraph = document.createElement('p');



let myHeadingText = document.createTextNode('product title');
let myParagraphText = document.createTextNode ('product description');

//appenet element to body
document.body.appendChild(myMainElement);


//1-add heading text
myHeadind.appendChild(myHeadingText);
//2-add heading to main element
myMainElement.appendChild(myHeadind);

//1-add paragraph text 
myParagraph.appendChild(myParagraphText);
//2- add paragraph to the main element
myMainElement.appendChild(myParagraph)



myMainElement.className = 'product';





