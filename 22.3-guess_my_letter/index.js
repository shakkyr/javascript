let headLine = document.createElement("h2"), // game name
  smallBox = document.createElement("div"), // the letters box
  warning = document.createElement("div"), // letter check massege
  keyGuessed = document.createElement("div"), // wod you like to try again
  alreadyGuessed = document.createElement("div"), // guessed letters
  yesButton = document.createElement("input"); //yes button

// ========================= linking ======================

document.body.append(
  headLine,
  smallBox,
  warning,
  keyGuessed,
  alreadyGuessed,
  yesButton
);

// ================= styling ==================================
document.body.style.textAlign = "center";
document.body.style.position = "relative";

headLine.innerHTML = "Welcom To Guess My Letter";
headLine.style.fontSize = "40px";

smallBox.style.border = "2px grey solid";
smallBox.style.height = "40px";
smallBox.style.width = "40px";
smallBox.style.marginBottom = "40px";
smallBox.innerHTML = "?";
smallBox.style.fontSize = "40px";
smallBox.style.textAlign = "center";
smallBox.style.paddingBottom = "10px";
smallBox.style.marginTop = "10px";
smallBox.style.position = "absolute";
smallBox.style.left = "1070px";

warning.innerHTML = "Guess a letter";
warning.style.fontSize = "20px";
warning.style.fontWeight = "bold";
warning.style.marginBottom = "70px";
warning.style.marginTop = "130px";

keyGuessed.innerHTML = "keys guessed";
keyGuessed.style.fontSize = "25px";
keyGuessed.style.marginBottom = "50px";

alreadyGuessed.innerHTML = "";

// ========== button ======================
yesButton.type = "button";
yesButton.value = "yes";
yesButton.style.padding = "7px";
yesButton.style.visibility = "hidden";

// ======================= functions ========================
const english ="abcdefghijklmnopqrstuvwxyz";

let guesses = [];
function gettLetter() {
  let random = Math.floor(Math.random() * english.length);
  return english[random];
}
function checkLetter(event) {
  if (event.key.toLowerCase() == myLetter) {
    smallBox.innerHTML = event.key.toLowerCase();
    warning.style.color = "green";
    warning.style.fontSize = "20px";
    warning.style.fontWeight = "bold";
    warning.innerHTML = "right letter!";
    yesButton.style.visibility = "visible";
    alreadyGuessed.innerHTML = "";
    keyGuessed.innerHTML = "Would you like to play again?";
    keyGuessed.style.fontSize = "25px";
    guesses = [];
    document.removeEventListener("keydown", checkLetter);
  } else if (english.includes(event.key.toLowerCase())) {
    if (guesses.includes(event.key.toLowerCase())) {
      warning.innerHTML = "letter already clicked";
    } else {
      warning.style.color = "red";
      warning.style.fontSize = "20px";
      warning.style.fontWeight = "bold";
      guesses.push(event.key.toLowerCase());
      alreadyGuessed.innerHTML = guesses;
      warning.innerHTML = "Nope, wrong letter";

      console.log(guesses);
    }
  } else if (!english.includes(event.key.toLowerCase())) {
    warning.style.color = "red";
    warning.style.fontSize = "20px";
    warning.style.fontWeight = "bold";
    alreadyGuessed.innerHTML = guesses;
    warning.innerHTML = "please inter a valid letter";
  }
}
let myLetter = gettLetter();

let isFound = false;

document.addEventListener("keydown", checkLetter);
yesButton.addEventListener("click", () => {
  location.reload();
  //   document.addEventListener("keydown", checkLetter);
});
