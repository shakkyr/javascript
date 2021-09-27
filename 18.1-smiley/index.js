const text = document.querySelector('.input'),
    button = document.querySelector('.submit'),
    error = document.querySelector('.error'),
    image = document.querySelector('.imgContainer');
    
    

chekNumber =() => {
    image.innerHTML = '';
    error.innerHTML = '';

    if(text.value == parseInt(text.value) && text.value < 100 ){  
        for (let i = 0; i<text.value ; i++){
            image.innerHTML += '<img src="./smile.jpg" alt="">'
            image.style.size= '20px'
        } 
        }

    else error.innerHTML = 'dude enter just numbers';   
        error.style.color ='red'
    
}   


button.addEventListener('click', chekNumber);