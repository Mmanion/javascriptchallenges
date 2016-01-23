<!-- Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.    -->

// answer

function repeat(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

repeat("abc", 3);
