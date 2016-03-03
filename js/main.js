var newString, newColor;

function waitPivot() {
  newString = Randomize.run(words);
  newColor = Randomize.randomColor(colors);
  document.getElementById('replace-this-text').innerHTML = newString;
  document.body.style.backgroundColor = newColor;
}
waitPivot();

document.getElementById('pivot').onclick = function() {
  waitPivot();
  document.getElementById("pivot").style.color = newColor;
};

document.getElementById('pivot').onmouseover = function() {
  document.getElementById("pivot").style.color = newColor;
};
document.getElementById('pivot').onmouseout = function() {
  document.getElementById("pivot").style.color = "#fff";
}
