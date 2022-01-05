(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = names[i];
  var speakWord = "Hello";
  helloSpeaker.speak = function () {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
