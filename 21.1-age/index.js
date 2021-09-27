let mainBox = document.createElement('div'),
    inputAge = document.createElement('input'),
    button = document.createElement('input'),
    massege = document.createElement('div'),
    paragraph = document.createElement('p');



// linkink elements
document.body.appendChild(mainBox);
mainBox.appendChild(paragraph)
mainBox.appendChild(inputAge);
mainBox.appendChild(button);
mainBox.appendChild(massege);

// =======================================
inputAge.className ='age';
button.className='enter';
massege.className='warning';


// =================== head masseeage ============================
let myText = document.createTextNode ('please enter your age to check if you can drink alcohol');
paragraph.appendChild(myText);


// ========================= button ========================
button.type = 'button';
button.value = 'press to check';

// ============================== age input ==================
inputAge.type = 'text';



function checking() {
    if (inputAge.value == parseInt(inputAge.value) && inputAge.value >= 18 ){
        massege.innerHTML = ' go ahead you can drink';
        massege.style.color = 'green';
    }

    else if (inputAge.value == parseInt(inputAge.value) && inputAge.value < 18 ){
        massege.innerHTML = ' go away you are not allowed to drink';
        massege.style.color = 'red';
    }

    else 
    massege.innerHTML = ' please enter a valid text';
}

button.addEventListener('click', checking);