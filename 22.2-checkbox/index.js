let formA = document.createElement('form'),
    headLine = document.createElement('h2'),//heading paragraph
    checkk = document.createElement('input'),//the chekbox button
    imgContainer = document.createElement('div');// image container
    image2= document.createElement('img');


// ========================= linking elements ======================
document.body.appendChild(formA);
formA.appendChild(headLine);
formA.appendChild(checkk);
formA.appendChild(imgContainer);
imgContainer.appendChild(image2);

// ===================== text ==================
headLine.innerHTML = 'this is a random page to show and hide a random pic ' + '<br>'
                      + 'check the box down there';
headLine.style.color = 'green';

// ================== checkbox ===================
checkk.type = 'checkbox';

//image2
image2.src='/18.2-create_web_page/image2.jpg'
image2.style.width='300px';
image2.style.height='400px';
image2.style.display = 'none';

function checked() {
    if (checkk.checked) {
        image2.style.display = 'block';
      } else {
        image2.style.display = 'none';
      }    
};

checkk.addEventListener('change', checked);