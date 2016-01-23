<!-- Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. -->

//answer

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++){
    var largestNumber = 0;
    for (var sb = 0; sb < arr[n].length; sb++){
      if (arr[n] [sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);