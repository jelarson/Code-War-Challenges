// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript

function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
};

class Dog {
  constructor(breed) {
      this.breed = breed;
  }
  
  bark() {
      return "Woof";
  }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");