// create myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  // change below
  var firstPet = "";
  var lastPet = "";
  myNewPets.push("Bird", "Fish");
  firstPet = myNewPets.shift();
  lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");

  return myNewPets;
  // change above
}

console.log(myArrayFunction(myPetsArray)); // change this line
module.exports = myArrayFunction;
