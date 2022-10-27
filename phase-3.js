const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Fill this in
  newArray = []
  startTime = Date.now()

  for (let i = 1; i <= 10; i++) {
    console.time(`addNums10Timing ${i}`)
    newArray.push(addNums(i * increment))
    console.timeEnd(`addNums10Timing ${i}`)
  }
  console.log(newArray)
  endTime = Date.now()
  console.log(`Total runtime: ${endTime - startTime}ms`)
  return newArray;

}


function addManyNums10Timing(increment) {
  // Fill this in
  let newArray = [];
  startTime = Date.now()
  

  for (let i = 1; i <= 10; i++) {
    console.time(`addManyNums10Timing ${i}`)
    newArray.push(addManyNums(i*increment))
    console.timeEnd(`addManyNums10Timing ${i}`)
  }
  endTime = Date.now()
  console.log(`Total Runtime: ${endTime - startTime}ms`)
  return newArray;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);