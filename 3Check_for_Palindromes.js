<!-- Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes. -->

// Answer

function palindrome(str) {
  var palStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  if (palStr === palStr.split('').reverse().join('')){
      return true;
      } else {
      return false;
      }
}



palindrome("eye");