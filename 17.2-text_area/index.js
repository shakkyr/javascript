const textvalue = document.querySelector(".text"),
      click = document.querySelector(".click"),
      alert = document.querySelector(".warning")
      console.log();
myFunction = () => {
  
  if (textvalue.value.length < 100) {
   alert.innerHTML =
      "you shoud put 100 character";
  } else if ( textvalue.value.length>= 100) {
   alert.innerHTML = "";
  }
}
click.addEventListener("click", myFunction);
textvalue.addEventListener("keyup", myFunction);
