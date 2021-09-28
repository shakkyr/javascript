let allLists = document.querySelectorAll('li'),
    allInputs = document.querySelectorAll('input')




// function check( ) {
//     for ( let i =0; i < allInputs.length ; i++){
//           if (allInputs[i].values.length >1){
//             allInputs[i+1].addEventListener('focus');
//     }
    
// }
// }


// allInputs.addEventListener('keydown', function() {
//     for ( let i =0; i < allInputs.length ; i++){
//     if (document.querySelector('.i').value.length >1){
//         document.querySelector('.i'+1).addEventListener('focus');
// }}

chekInput = (inpu) => {
     if ((inpu.target).nextElementSibling && (inpu.target).value ){
        (inpu.target).nextElementSibling.focus();
     }


}


// const form = document.querySelector('[name="verify"]');
// const inputs = form.querySelectorAll('.inputs input');
// function handleInput(e) {
//     // check for data that was inputtted and if there is a next input, focus it
//   const input = e.target;
//   if (input.nextElementSibling && input.value) {
//       input.nextElementSibling.focus();
//   }
//   }
  
//   function handlePaste(e) {
//   const paste = e.clipboardData.getData('text');
//     // loop over each input, and populate with the index of that string
//   inputs.forEach((input, i) => {
//       console.log(input);
//       input.value = paste[i] || '';
//   });
//   }
  
//   inputs[0].addEventListener('paste', handlePaste);
  
//   form.addEventListener('input', handleInput);

// const form = document.querySelector('[name="verify"]');
// const inputs = form.querySelectorAll('.inputs input');
// const inputsArr = [...inputs];
// const submitBtn = document.querySelector('input[type="submit"]');

// const selectIfNotEmpty = function(e) {
//   if (e.target.value) {
//     e.target.select();
//   }
// }

// const handleInput = function(e) {
//   if (e.target.value && e.target.nextElementSibling) {
//     e.target.nextElementSibling.focus();
//   }
//   if (!e.target.nextElementSibling && inputsArr.every(input => input.value)) {
//     submitBtn.focus();
//   }
// }

// const handleBackspace = function(e) {
//   if (e.keyCode == 8 && e.target.value == '' && e.target.previousElementSibling) {
//     e.target.previousElementSibling.focus(); 
//   }
// }

// const handlePaste = function(e) {
//   const data  = e.clipboardData.getData('text');
//   inputs.forEach((input, i) => {
//     input.value = data[i] || input.value
//   })
//   if (inputsArr.every(input => input.value)) {
//     submitBtn.focus();
//     console.log('ready for submit')
//   }
  
// }

// const handleSubmit = function(e) {
//   e.preventDefault();
//   //console.log(completed)
// }

// const handleArrows = function(e) {
//   if (e.keyCode == 37 && e.target.previousElementSibling) {// izq
//     e.preventDefault();
//     e.target.previousElementSibling.focus()
//   }
   
//   if (e.keyCode == 39 && e.target.nextElementSibling) {// der
//     e.preventDefault();
//     e.target.nextElementSibling.focus()
//   }
// }

// inputs.forEach(input => {
//   input.addEventListener('focus', selectIfNotEmpty)
// })

// inputs.forEach(input => {
//   input.addEventListener('input', handleInput);
// })

// inputs.forEach(input => {
//   input.addEventListener('keyup', handleBackspace);
// })

// inputs.forEach(input => {
//   input.addEventListener('paste', handlePaste);
// })

// inputs.forEach(input => {
//   input.addEventListener('keydown', handleArrows);
// })

// form.addEventListener('submit', handleSubmit)















let listOfTextbox = document.querySelectorAll('.textbox')
const sbmtBtn = document.querySelector('#submitBtn')

listOfTextbox[0].focus();
for(let i=0; i < listOfTextbox.length-1; i++)
{
    listOfTextbox[i].addEventListener('input',function() {
        listOfTextbox[i+1].focus();
    })
}

listOfTextbox[0].addEventListener('paste',(event)=>{
    let pasteData = (event.clipboardData || window.clipboardData).getData('text');
    pasteData = pasteData.split('');
    for(let i=0; i < listOfTextbox.length; i++)
    {
        listOfTextbox[i].value=pasteData[i];
    }
    document.activeElement.blur(); //remove focus
    setInterval(()=>{ //auto submit after 1 sec
        location.reload();
    },1000)
})

sbmtBtn.addEventListener('click',()=> {
    location.reload();
})

listOfTextbox[listOfTextbox.length-1].addEventListener('input',function() {
    let isFilled = true;
    for(let i=0; i < listOfTextbox.length; i++)
    {
        if(!listOfTextbox[i].value)
            isFilled = false;
    }
    if(isFilled)
    {
        setInterval(()=>{
            location.reload(); //auto submit after 1 sec
        },1000)
    }
})