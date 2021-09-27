// ================= creating elements ====================
let formA = document.createElement('form'),
    mainDiv = document.createElement('div'),
    div1 = document.createElement('div'),
    div2 = document.createElement('div'),
    div3 = document.createElement('div'),
    headText = document.createElement('h2'), //head line text
    nameInput = document.createElement('input'),//name
    ageInput = document.createElement('input'),//age
    emailInput = document.createElement('input'),//email
    enter = document.createElement('input'),// submit button
    firstMassege = document.createElement('div'),//confirmation massege
    paragraph = document.createElement('p')
    confirm = document.createElement('input'),//confirmation button
    back = document.createElement('input');



    // =================== linking elements ==========================
    document.body.appendChild(formA);
    formA.appendChild(mainDiv);
    mainDiv.appendChild(headText);
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div3);
    div1.appendChild(nameInput);
    div2.appendChild(ageInput);
    div3.appendChild(emailInput);
    mainDiv.appendChild(enter);
    mainDiv.appendChild(firstMassege);
    firstMassege.appendChild(paragraph);
    firstMassege.appendChild(confirm);
    firstMassege.appendChild(back);
    

    // ============================= text filling ===================
    headText.innerHTML = 'please fill the form below ';


// ======================= assigning classes ========================
    nameInput.className = 'name';
    ageInput.className = 'age';
    emailInput.className = 'email';
    enter.className= 'enter';
    firstMassege.className= ' firstmas';
    confirm.className = 'conf';

    // ============================== placeholder ============================
    nameInput.placeholder = 'your name here';
    ageInput.placeholder = 'age';
    emailInput.placeholder = 'email'

    // ========================= buttons ========================
    enter.type = 'button';
    enter.value = 'submit';
    
    confirm.type = 'button';
    confirm.value = 'confirm';

    back.type = 'button';
    back.value = 'modify';

// ============================ styling =========================
firstMassege.style.visibility =''
firstMassege.style.border = '2px solid black';
firstMassege.style.width = '400px';
firstMassege.style.height = '200px';
firstMassege.style.position = 'absolute';
firstMassege.style.left = '0';
firstMassege.style.top = '0';
firstMassege.style.zIndex = '1';
firstMassege.style.background = 'grey';


function confirming() {
    firstMassege.style.visibility = 'visible ';
    paragraph.innerHTML =  'you have entered this are you sure ?'+'<br><br><br>'+
                                nameInput.value +' <br><br>'+ emailInput.value +
                                '<br><br>'  +ageInput.value;
};

function confirming2() {
    paragraph.innerHTML =  'congratulations you successfully sent this form';
    paragraph.style.color = 'green';   
}

function cancelling() {
    firstMassege.style.visibility = 'hidden ';
    
}


enter.addEventListener('click', confirming)
confirm.addEventListener('click',confirming2)
back.addEventListener('click',cancelling)
