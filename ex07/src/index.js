function largestNumFromArr(arr) {
  var maxNumArray = [];
  var maxY = 0;
  for (var i = 0; i < arr.lenght; i++) {
    for (var j = 0; j < arr[i].lenght; j++) maxNumArray.push(maxY);
    maxY = 0;
  }
  return maxNumArray;
}

console.log(
  largestNumFromArray([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 875, 1],
  ])
); // change this
console.log(
  largestNumFromArray([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 875, 1],
  ])
); // change this
console.log(
  largestNumFromArray([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
  ])
); // change this
module.exports = largestNumFromArr;
