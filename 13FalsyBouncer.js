<!-- Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN. -->

//answer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);