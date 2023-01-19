let x = Math.round(innerWidth / 2);
let y = Math.round(innerHeight / 2);
let dot = document.getElementById("dot");

dot.style.left = x + "px";
dot.style.top = y + "px";

document.onmousemove = function(event) {

  if(event.clientX + 10 == x) {
    x = x + 10;
  }
  if(event.clientX - 30 == x) {
    x = x - 10;
  }
  if(event.clientY + 10 == y) {
    y = y + 10;
  }
  if(event.clientY - 30 == y) {
    y = y - 10;
  }

  if (x > window.innerWidth) {
    x = 15;
  }
  if (x < 0) {
    x = window.innerWidth - 45;
  }
  if (y > window.innerHeight) {
    y = 45;
  }
  if (y < 0) {
    y = window.innerHeight - 100;
  }
  
  dot.style.left = x + "px";
  dot.style.top = y + "px";
};