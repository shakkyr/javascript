// let allButtons = document.querySelectorAll('.btn');
window.addEventListener('keydown', (e)=>{
    let audio = new Audio(`sound/${e.key}.wav`);
        audio.play();
})

//  allButtons.forEach((el) => {
//         console.log(el.id);
//         el.addEventListener('keypress', (e)=>{
//             if ( e.key === el.id){

//                 let audio = new Audio(`sound/${e.key}.wav`);
//                 audio.play();
//             }
//         })
//     })

