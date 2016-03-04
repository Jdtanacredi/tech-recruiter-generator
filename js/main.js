var newString, newColor, modalColors;
modalColors = document.getElementsByClassName("modal-colors");
borderColors = document.getElementsByClassName("border-colors");

function waitPivot() {
  function mapper(elementArray,applyStyle) {
    for (var i = 0; i < elementArray.length; i++) {
      elementArray[i].style[applyStyle] = newColor;
    }
  }
  newString = Randomize.run(words);
  newColor = Randomize.randomColor(colors);
  document.getElementById('replace-this-text').innerHTML = newString;
  document.body.style.backgroundColor = newColor;
  mapper(borderColors,"border-color");
  mapper(modalColors,"color");
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
