let myMainElement = document.createElement('div'),//main div
    myHeadind = document.createElement('h2'),//// main div head text
    myParagraph = document.createElement('p'),// main div paragraph
    imgContainer = document.createElement('div'),// second div for image and button
    btn = document.createElement('input'),// button in second div
    warning = document.createElement('p'),
    image2= document.createElement('img');

document.body.style.backgroundRepeat ='no-repeat';
document.body.style.backgroundPosition='center';
document.body.style.backgroundSize='cover';
document.body.style.textAlign='center';
document.body.style.width='100vw';
document.body.style.height='100hv'
document.body.style.backgroundImage = 'url(/18.2-create_web_page/image1.jpg)'

//headline text
myHeadind.style.fontSize ='50px';
myHeadind.style.color ="green";

//paragtaph styling
myParagraph.style.color='grey'
myParagraph.style.fontSize ='30px';



//second div styling
imgContainer.style.width = '100vw'
imgContainer.style.textAlign='center';


    //button styling
btn.style.color= 'white'
btn.style.width='100px'
btn.style.background='grey'

// warning styling
warning.style.background ='grey';
warning.style.width='200px';
warning.style.visibility = 'hidden';




//texting
let myHeadingText = document.createTextNode('Hello im shadi rada');
let myParagraphText = document.createTextNode ('welcome to my mini webpage');
let secondWarning = document.createTextNode ('thank you for your support!!!')

//appenet element to body
document.body.appendChild(myMainElement);
document.body.appendChild(imgContainer);



//1-add heading text
myHeadind.appendChild(myHeadingText);
//2-add heading to main element
myMainElement.appendChild(myHeadind);

//1-add paragraph text 
myParagraph.appendChild(myParagraphText);
//2- add paragraph to the main element
myMainElement.appendChild(myParagraph)

imgContainer.appendChild(btn);
imgContainer.appendChild(warning);
warning.appendChild(secondWarning);
imgContainer.appendChild(image2);


// assigning a class to the elements
myMainElement.className = 'product';
imgContainer.className = 'mini-image';
warning.className = 'warning';
image2.className='second';


//image2
image2.src='/18.2-create_web_page/image2.jpg'
image2.style.width='300px';
image2.style.height='400px'

//button
btn.className = 'button';
btn.type ='button';
btn.value = 'join me'

warn =() =>{
    warning.style.visibility = 'visible';
    warning.style.transform= 'translateX(1000px)'
    warning.style.textTransform='2s'

}
btn.addEventListener('click',warn)





