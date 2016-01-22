<!-- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". -->

//Answer

function titleCase(str) {
  var titledStr = "";
  var strArray = str.split(" ");
  var wordArray = [];

  for (var i=0; i<strArray.length; i++) {
    wordArray = strArray[i].toLowerCase().split('');
    titledStr += wordArray.shift().toUpperCase() + wordArray.join('');
    if (i !== strArray.length - 1) {
      titledStr += " ";
    }
  }
  return titledStr;
}

titleCase("I'm a little tea pot");