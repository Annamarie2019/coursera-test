(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = "?";
  var speakWord = "Hello";
  helloSpeaker.speak = function () {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
