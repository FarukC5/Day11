// Create monitorsListArray
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray
function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Change below
  var monitorsList = [];
  for (var i = 0; i < newMonitorsList.length; i++) {
    monitorsList.push([newMonitorsList[i], i + 1]);
  }
  return monitorsList;
  // Change above
}

console.log(myMonitorsFunction(monitorsListArray)); // change here
module.exports = myMonitorsFunction;
