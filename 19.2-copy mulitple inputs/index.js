let smallBoxes = document.querySelectorAll('.text')
const confirm = document.querySelector('.submitn')

smallBoxes[0].focus();
for(let i=0; i < smallBoxes.length-1; i++)
{
    smallBoxes[i].addEventListener('input',function() {
        smallBoxes[i+1].focus();
    })
}

smallBoxes[0].addEventListener('paste',(event)=>{
    let pasteData = (event.clipboardData || window.clipboardData).getData('text');
    pasteData = pasteData.split('');
    for(let i=0; i < smallBoxes.length; i++)
    {
        smallBoxes[i].value=pasteData[i];
    }
    document.activeElement.blur();
    setInterval(()=>{ 
        location.reload();
    },1000)
})

confirm.addEventListener('click',()=> {
    location.reload();
})

smallBoxes[smallBoxes.length-1].addEventListener('input',function() {
    let filled = true;
    for(let i=0; i < smallBoxes.length; i++)
    {
        if(!smallBoxes[i].value)
            filled = false;
    }
    if(filled)
    {
        setInterval(()=>{
            location.reload(); 
        },1000)
    }
})








