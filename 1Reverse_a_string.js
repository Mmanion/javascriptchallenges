<!-- Reverse the provided string.
//-->

function reverseString(str) {
  var strReverse = str.split('').reverse().join('');
  return strReverse;
}

reverseString("hello");