// Create a temps array here
var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];
// End of tems array
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // change below
  var sum = 0;
  var averageV = 0;
  for (var i = 0; i < newTemps.length; i++) {
    for (var j = 0; j < newTemps[i].length; j++) {
      sum += newTemps[i][j];
    }
    averageV = sum / newTemps[i].length;
    averageDayTemp.push(averageV);
    sum = 0;
  }
  return averageDayTemp;
  // change abowe
}

console.log(myArrayFunction(temps)); // change this
module.exports = myArrayFunction;

/*

 [31, 32, 19, 37],
   [29, 27, 55, 36],
   [17, 27, 42, 46],
   [29, 52, 21, 64],
   [91, 27, 31, 61],

   */
