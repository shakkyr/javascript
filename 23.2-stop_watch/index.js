let currentTimer = 0,
    interval = 0,
    lastUpdateTime = new Date().getTime(),
    ss = document.querySelector(".stopwatch"),
    start = document.querySelector(".start"),
    stop = document.querySelector(".stop"),
    reset = document.querySelector(".reset"),
    mins = document.querySelector(".minutes"),
    secs = document.querySelector(".seconds"),
    milli = document.querySelector(".milliseconds");

function pad(n) {
  return ("00" + n).substr(-2);
}

function update() {
  let now = new Date().getTime(),
    dt = now - lastUpdateTime;

  currentTimer += dt;

  let time = new Date(currentTimer);

  mins.innerHTML = pad(time.getMinutes());
  secs.innerHTML = pad(time.getSeconds());
  milli.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

  lastUpdateTime = now;
}

function startTimer() {
  if (!interval) {
    lastUpdateTime = new Date().getTime();
    interval = setInterval(update, 1);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = 0;
}

function resetTimer() {
  stopTimer();

  currentTimer = 0;

  mins.innerHTML = secs.innerHTML = milli.innerHTML = pad(0);
}


start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);



// ======================= the code below also working and it's prefered ====================================


// const clock = document.querySelector('.clock'),
//     start = document.querySelector('.start'),
//     stop = document.querySelector('.stop'),
//     reset = document.querySelector('.reset');

// clock.innerHTML = '00:00:00';//ms: s : m
// let time = 0,clockInterval;

// function startClock() {
//     clockInterval =setInterval(() => {
//         time++
//         let ms= time%1000;//1500 => 500
//         let s = parseInt((((time-(time %1000))/1000)%60).toString())
//         let m = parseInt((((time-(time %1000))/1000)/60).toString())
//         clock.innerHTML = `ms : ${ms} , s : ${s} m :${m}`;
//     }, 1)
// }


// function stopClock() {
//     clearInterval(clockInterval)
// }
// function resetClock(){
//     stopClock()
//     time=0;
//     clock.innerHTML = '00:00:00';//ms: s : m
// }

// start.addEventListener('click', startClock)
// stop.addEventListener('click',stopClock)
// reset.addEventListener('click',resetClock)


// //q1
// // const clock = document.querySelector('.clock');
// //
// // setInterval(()=>{
// //     const date = new Date();
// //     clock.innerHTML = "the time is :" + getTime(date);
// // },1000)
// //
// // function getTime(date) {
// //     return `${date.getHours()} :${date.getMinutes()} :${date.getSeconds()}`
// // }
