<!-- Check if a string (first argument) ends with the given target string (second argument). -->


//answer

function end(str, target) {

  return str.substr(-target.length) === target;
}

end("Bastian", "n");
