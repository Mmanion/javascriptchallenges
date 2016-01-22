<!--Return the length of the longest word in the provided sentence.
Your response should be a number. -->

//Answer

function findLongestWord(str) {

  var strArray = str.split(" ");

  var longestWord = 0;

  for (var i =0; i < strArray.length; i++){
    if (strArray[i].length > longestWord) {
      longestWord = strArray[i].length;
  }
}
return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");