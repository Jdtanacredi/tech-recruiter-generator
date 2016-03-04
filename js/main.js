var newString, newColor, modalColors;

function waitPivot() {
  newString = Randomize.run(words);
  newColor = Randomize.randomColor(colors);

  function mapper(elementArray,applyStyle) {
    for (var i = 0; i < elementArray.length; i++) {
      elementArray[i].style.applyStyle = newColor;
    }
  }

  document.getElementById('replace-this-text').innerHTML = newString;
  // document.getElementById('divider').style.borderColor = newColor;
  document.body.style.backgroundColor = newColor;
  modalColors = document.getElementsByClassName("modal-colors");
  borderColors = document.getElementsByClassName("border-colors");
  mapper(borderColors,"borderColor");
  mapper(modalColors,"color");
  // for (var i = 0; i < modalColors.length; i++) {
  //   modalColors[i].style.color = newColor;
  // }
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
