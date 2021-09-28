let allLists = document.querySelectorAll('li'),
    allInputs = document.querySelectorAll('input')


allInputs[0].innerHTML=''

// function check( ) {
//     for ( let i =0; i < allInputs.length ; i++){
//           if (allInputs[i].values.length >1){
//             allInputs[i+1].addEventListener('focus');
//     }
    
// }
// }


allInputs.addEventListener('keydown', function() {
    for ( let i =0; i < allInputs.length ; i++){
    if (document.querySelector('.i').value.length >1){
        document.querySelector('.i'+1).addEventListener('focus');
}}

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