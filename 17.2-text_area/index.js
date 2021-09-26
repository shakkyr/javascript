const textvalue = document.querySelector(".text"),
      click = document.querySelector(".click"),
      alert = document.querySelector(".warning");
      console.log();
      alert.style.color = 'brown';
myFunction = () => {
  
  if (textvalue.value.length < 100) {
   alert.innerHTML =
      "you shoud put 100 character ";
  } else if ( textvalue.value.length>= 100) {
   alert.innerHTML = "now its ok";
   alert.style.color = 'green';
  }
}
click.addEventListener("click", myFunction);
textvalue.addEventListener("input", myFunction);
