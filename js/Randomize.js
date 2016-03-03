var Randomize = (function () {

  var _pickRandom = function(array) {
    return array[Math.floor(Math.random()*array.length)];
  };
  var _concatwords = function(part1,part2) {
    return part1 + " " + part2;
  };
  var randomPhrase = function(object) {
    var firstWord = _pickRandom(object.description),
        lastWord = _pickRandom(object.title);
    return _concatwords(firstWord,lastWord);
  };

  return {
    run: randomPhrase,
    randomColor: _pickRandom
  };

})();
