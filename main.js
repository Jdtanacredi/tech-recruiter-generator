var Randomize = (function () {
  var description = ["Front End","User Experience","Back End","MySQL","Hadoop","DevOps"];
  var title = ["Unicorn","Astronaut","Barista","Ninja","Warrior","Champion","Cosmonaut"];

  var _switchTerms = function(array) {
    return array[Math.floor(Math.random()*array.length)];
  };
  var _concatwords = function(part1,part2) {
    return part1 + " " + part2;
  };
  var run = function() {
    var firstWord = _switchTerms(description),
        lastWord = _switchTerms(title);
    return _concatwords(firstWord,lastWord);
  };

  return {
    run: run
  };

})();
