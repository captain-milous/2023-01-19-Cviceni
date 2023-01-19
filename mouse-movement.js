document.body.onmousemove = function(e) {
  var x = e.clientX;
  var width = window.innerWidth;
  var color = x / width;
  color = Math.round(color * 256) + 1;
  color = Math.abs(256 - color);
  console.log(`rgb(${color},${color},${color})`);
  document.body.style.background = `rgb(${color},${color},${color})`;
}