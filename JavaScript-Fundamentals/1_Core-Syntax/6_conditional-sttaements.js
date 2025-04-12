// === IF CONDITION ===
// it checks if a condition is true then execute its blocks

let weather = "sunny"

if (weather === "sunny") {
  console.log("Let's go to Murree for fun!") // this will execute
}


// === IF ELSE CONDITION ===
// it checks if a condition is true then execute its blocks 
// else execute the second block directly as second option

let hasClassToday = false

if (hasClassToday) {
  console.log("Attend your class properly.")
} else {
  console.log("Go play cricket with friends!")  // this will execute
}



// === IF - ELSE IF - ELSE ===
// Checks for the multiple scenarios and then execute only that block 
// where the conditions meeks and remain rest of the blokcks

let marks = 78

if (marks >= 90) {
  console.log("Grade: A+")
} else if (marks >= 80) {
  console.log("Grade: A")
} else if (marks >= 70) {
  console.log("Grade: B")  // this will execute
} else {
  console.log("Grade: Below Average")
}


// === Real Example ===
let age = 16

if (age >= 18) {
  console.log("You can ride a bike in Karachi.")
} else {
  console.log("Sorry, you're underage.")  // this will execute
}


// === SWITCH CASE ===
// When we have to cehck th emutiple scenarios of a single variable

let city = "Lahore"

switch (city) {
  case "Karachi":
    console.log("Welcome to the city of lights!")
    break
  case "Lahore":
    console.log("Lahore Lahore ae!")  // this will execute
    break
  case "Islamabad":
    console.log("The capital of Pakistan.")
    break
  case "Peshawar":
    console.log("The city of Flowers.") // where i live
    break
  default:
    console.log("City not recognized.")
}
