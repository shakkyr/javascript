// ============================= digital clock =====================


const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
setInterval(() => {
  let today = new Date();
  let realHours = today.getHours();
  let realMinuts = today.getMinutes();
  let realSeconds = today.getSeconds();

  if (realHours < 10) {
    hours.innerHTML = '0' +' ' + realHours;
    }
  else {hours.innerHTML = realHours;
       }
  if (realMinuts < 10) {
    minutes.innerHTML = '0' +' ' + realMinuts;
     }
  else {minutes.innerHTML = realMinuts;
}
  if (realSeconds < 10) {
    seconds.innerHTML = '0' +' ' + realSeconds;
  }
  else {seconds.innerHTML = realSeconds;}
}, 1000);

// ====================== analog clock =============================

const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `translateY(-2px) rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + 90;
  minutesHand.style.transform = `translateY(-3.5px) rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `translateY(-5px) rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
