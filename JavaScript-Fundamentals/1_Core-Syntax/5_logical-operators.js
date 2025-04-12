// === LOGICAL OPERATORS ===

// Example: Marirage Logic (HaHaaHa)

let hasJob = true
let ownsCar = false

if (hasJob && ownsCar) {
  console.log("Proposal Accepted")
} else {
  console.log("Proposal Pending...") // this like will eecute
}

// " && " is called  AND Operator: and it cheks both the conditions in its left and right 
//  if both are true then ir returns true, else false

// OR Operator:
let hasDegree = true
let isRich = false

if (hasDegree || isRich) {
  console.log("Proposal can be considered.") // this block will execute
}

// " || " is called  OR Operator: and it cheks only single the conditions in its left and right 
//  if any of the conditionsurrounding is true, then it returns true


// NOT Operator:
let isRaining = false

if (!isRaining) {
  console.log("Going for a Picnic")  // this will executes
}

// " ! " is called NOT Operator: it flips the value ; false becomes true, and vice versa

// Real world combo:
let isWeekend = true
let isSunny = true

if (isWeekend && isSunny) {
  console.log("Lets go for a Picnic.")  // willl execute
}

if (!(isWeekend && isSunny)) {
  console.log("Spend time with family.")  // go for job
}else{
  console.log("Going to Job.")  // this will execute
}
