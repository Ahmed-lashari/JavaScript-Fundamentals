// === COMPARSION OPERATORS ===

// there are two main comparison operators in jS
// " == " and " === "
// " == " : ONLY CHECKS THE VALUES OF THE VARIABLES
// " === " : THIS WORKS EXACTLY SAME LIKE THE CPP's, or JAVA's " == " operator

// Example 1: Comparing two same values with different types
let a = 5        // number
let b = "5"      // string

console.log(a == b)   // true
console.log(a === b)  // false


// " == " this operator is saying that the values insdie a and b is same
// " === " this operator said that a is number, and b is string, so both are different

// thats why, " === " is more stricct like the, CPP's or JAVA's or PYTHON's " == " operator

// Example 2: Real life example
let studentAge = "18"    // as string
let requiredAge = 18     // as number

if (studentAge == requiredAge) {
  console.log("Admission allowed using ==") 
}

if (studentAge === requiredAge) {
  console.log("Admission allowed using ===")
} else {
  console.log("Using ===: type mismatch, no admission")
}

// Will discuss the if(...){...} and if(...)else{} i  the coming ectures at path:

/// JavaScript-Fundamentals/1_Core-Syntax/6_conditional-sttaements.js
