<!-- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is not added to the string length. -->

// answer

function truncate(str, num) {
  // Clear out that junk in your trunk
  var returnString = "";
  if (str.length > num) {
    if (num > 3) {
      returnString += str.substr(0,num-3) + "...";
    } else {
      returnString += str.substr(0,num) + "...";
    }

    return returnString;
  }
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);