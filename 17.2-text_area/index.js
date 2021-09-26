const textvalue = document.querySelector(".text"),
      click = document.querySelector(".click"),
      alert = document.querySelector(".demo")
myFunction = () => {
  
  if (textvalue.value.length < 100) {
   alert.innerHTML =
      "YOU MUST WRITE MORE THAT 100 CHARACTERS";
  } else if (x >= 100) {
   alert.innerHTML = "";
  }
}
click.addEventListener("click", myFunction);
