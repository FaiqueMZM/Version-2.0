/*Hamburger Menu*/
function myFunction() {
  var x = document.getElementById("TopMainNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}