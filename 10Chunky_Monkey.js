<!-- Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array. -->

// answer

function chunk(arr, size) {
  // Break it up.
  arr = arr.slice();
  var brr = [];
  for(var i = 0, len = arr.length; i < len; i+=size) {
    brr.push(arr.slice(0,size));
    arr = arr.slice(size);
  }
  return brr;
}

chunk(["a", "b", "c", "d"], 2);