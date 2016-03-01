var Randomize = (function () {
  // var description = ["Front End","entry level","pixel perfect","passive aggressive","overpaid","generally unpleasent","Social Media Minded","Acting Chief",
  //                   "Executive Minded","Ergonomic Leaning","Rapid Prototyping","Somewhat Older","Fresh out of school","significantly awkward","Overchieving",
  //                   "Over Cafienated","Mouth Breathing","Queen Reagent","Surly looking","Unknowingly Smelly","spicy looking","agile","yoga obsessed","lightly perfumed",
  //                   "moonlighting","Soylent Drinking","snarky ","close talking","easily distracted","laser focused","Lumberjack-esque","Freelance","On-site",
  //                   "Remote only ","Newly Certified ","On Staff","Tech blogging","Boisterous","Entitled seeming","Brunch eating","overly charismatic","beardly"];
  //
  // var title = ["Astronaut","Ninja","Fireman","QA Monkey","product designer","interaction slave","dude in sandals","man in skinny jeans","developer in a hoodie",
  //             "asshole","growth-hacker","Recruiter","Guru","Content Manager","Digital Prophet","E-Shirpa","Dynamo","Quiet Guy","Happiness Officer",
  //             "Digital Nutritionist","Standing Desk guy","Cyber Viceroy","pixel pusher","scrum lead","Sandwich Artisan","Dream Alchemist","Keyboard Czar",
  //             "Digital Magician","Product Evangalist ","CSS Demi God","Slack Troll","IRC Snob","Swift Cyborg","Android Swami","Instagram Influencer","PHP craftsman",
  //             "Social Media Queen","Pinterest Manager","Snapchat Mama","Instabae","Junior Instabae","Linux Guy","Dude with a Hackintosh","Social Media King",
  //             "Guy with a Dog","Girl with tattoos","Guy with tattoos ","person with glasses","Loud EDM guy","Loud EDM Girl","hashtag scouter","Double Monitor Bro",
  //             "Vertical Mouse User","Guy with a Beard","loud sneeze guy","podcast appraiser ","ruby prospector","Guild leader","Headphones guy","Cat lady ",
  //             "Team mom","Gossip monger","Tech photographer","Sketch snob","Guy with photoshop","Mommy blogger","Dog blogger","Medium writer","Nitpicker",
  //             "Bathroom conversationalist","yoga ball sitter","bluetooth wearer","man bun guy"];

// var words = {description: description, title: title}
// console.log(words);

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
