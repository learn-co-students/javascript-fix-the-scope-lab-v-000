var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat";
  return animal
}

var n
n = Math.floor(Math.random() * 1000)

function add2(n) {
  n += 2
  return n
}

var funkyFunction = function() {
  var innerVariable = "FUNKY!";

  return function() {
    return innerVariable;
   }
  }

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"
