const text = document.querySelector('.input'),
    button = document.querySelector('.submit'),
    error = document.querySelector('.error'),
    image = document.querySelector('.imgContainer');


chekNumber =() => {
    image.innerHTML = '';
    error.innerHTML = '';

    if(typeof(text.value)='number' ){        
        error.innerHTML = ` dude enter just numbers`;
    }
    else {
            for (let i = 0; i<text.value ; i++){
        
        
            image.innerHTML += '<img src="./smile.jpg" alt="">'
    
        }
    
    }
}   


button.addEventListener('click', chekNumber);