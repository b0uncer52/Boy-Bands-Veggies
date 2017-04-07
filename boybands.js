var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var loopCount = bands.length;

var currentBand = "";

var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");

var veggieElement = document.getElementById("vegetables");

for (var loopTracker = 0; loopTracker < loopCount; loopTracker++) {
  
  currentBand = bands[loopTracker];
  bandElement.innerHTML += currentBand + "<br>";
  
  currentVeggie = vegetables[loopTracker];
  veggieElement.innerHTML += currentVeggie + "<br>";


}