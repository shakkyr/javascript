let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let stopBtn = document.querySelector('#stop');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let secTenth = document.querySelector('#secTenth');

let timer = new obj.Timer();
timer.addEventListener('secondTenthsUpdated', () => {
    const obj = timer.getTimeValues();
    hours.innerText = obj.hours.toString().padStart(2, '0');
    minutes.innerText = obj.minutes.toString().padStart(2, '0');
    seconds.innerText = obj.seconds.toString().padStart(2, '0');
    secTenth.innerText = obj.secondTenths.toString().padStart(2, '0');
})
startBtn.addEventListener('click', () => {
    timer.start({
        precision: 'secondTenths'
    })
})
pauseBtn.addEventListener('click', () => {
    timer.pause();
})
stopBtn.addEventListener('click', () => {
    timer.stop();
})





// let  x;
// let  startstop = 0;
  

// function startStop() { 
//  startstop = startstop + 1;

//  if (startstop === 1) {
//       start();
//       document.querySelector("#start").innerHTML = "Stop";
//     } else if (startstop === 2) {
//       document.querySelector("#start").innerHTML = "Start";
//       startstop = 0;
//       stop();
//     }
  
//  }
  

// function start() {
//     x = setInterval(timer, 10);
//   } 
  

// function stop() {
//     clearInterval(x);
// } 
  
// let  milisec = 0;
// let  sec = 0; 
// let  min = 0;

  
// let  miliSecOut = 0;
// let  secOut = 0;
// let  minOut = 0;
  
  
// function timer() {
//    miliSecOut = checkTime(milisec);
//    secOut = checkTime(sec);
//    minOut = checkTime(min);
  
//    milisec = ++milisec;
  
//     if (milisec === 100) {
//       milisec = 0;
//       sec = ++sec;
//     }
  
//     if (sec == 60) {
//       min = ++min;
//       sec = 0;
//     }

//     document.querySelector("#milisec").innerHTML = miliSecOut;
//     document.querySelector("#sec").innerHTML = secOut;
//     document.querySelector("#min").innerHTML = minOut;
//   }
  
  
// function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
// }
  

// function reset() {
//     milisec = 0;
//     sec = 0;
//     min = 0
//     document.querySelector("#milisec").innerHTML = "00";
//     document.querySelector("#sec").innerHTML = "00";
//     document.querySelector("#min").innerHTML = "00";
    
// }














const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const miliseconds = document.querySelector('.miliseconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let totalMiliseconds = 0;
function timer() {
    totalMiliseconds++;
    let calcMinutes = Math.floor(totalMiliseconds/100/60);
    let calcSeconds = Math.floor(totalMiliseconds/100);
    let calcMiliSeconds = Math.floor(totalMiliseconds%100);
    
    if(calcMinutes < 10)
        minutes.innerText = `0${calcMinutes}`;
    else
        minutes.innerText = `${calcMinutes}`;
    if(calcSeconds < 10)
        seconds.innerText = `0${calcSeconds}`;
    else
        seconds.innerText = `${calcSeconds}`;
    if(calcMiliSeconds < 10)
        miliseconds.innerText = `0${calcMiliSeconds}`;
    else
        miliseconds.innerText = `${calcMiliSeconds}`;
}

let timerStop;
let isPressed=false;
startBtn.addEventListener('click', () => {
    if(!isPressed)
    {
        console.log('+');
        timerStop =setInterval(timer,10)
        isPressed=true;
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerStop);
    isPressed=false;
})

resetBtn.addEventListener('click', () => {
    totalMiliseconds=0;
    clearInterval(timerStop);
    minutes.innerText= '00';
    seconds.innerText= '00';
    miliseconds.innerText= '00';
    isPressed=false;
})