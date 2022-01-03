(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  
var array = new Array();
array[0] = "Yaakov";
array[1] = "John";
array[2] = "Jen"; 
array[3] = "Jason";
array[4] = "Paul";
array[5] = "Frank";
array[6] = "Larry";
array[7] = "Paula"; 
array[8] = "Laura";
array[9] = "Jim";
  
  

for (var i = 0; i < names.length; i++) {
                                 
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();

console.log("Hello + " helloSpeaker["speak(names[i])]")
console.log("Goodbye + " byeSpeaker["speak(names[i])]")
