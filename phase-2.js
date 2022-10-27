const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  newArray = []

  for (let i = 1; i <= 10; i++) {
    newArray.push(addNums(i * increment))
  }
  console.log(newArray)
  return newArray;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let newArray = [];

  for (let i = 1; i <= 10; i++) {
    newArray.push(addManyNums(i*increment))
  }
  return newArray;

}


module.exports = [addNums10, addManyNums10];