// introduction to Javascript varibales creation and initilization

// ==========================
// VAR
// ==========================
// "var" javascript kai older versions mi use hota tha . 
// ab mostly newers versions mi "var" ko use krna avoid kiya jata hai

var city = "Lahore"
var city = "Peshawar"  // koi masla nahi, value overwrite ho gayi
console.log(city) // output= Peshawar

// ==========================
// LET
// ==========================
// "let" se variable declare karte hain jo update toh ho sakta hai
// lekin dobara same naam se declare nahi ho sakta

let fruit = "Mango"
// let fruit = "Banana"  // error 
fruit = "Banana"         // update allowed
console.log(fruit)       // output= Banana

// ==========================
// CONST
// ==========================
// "const" ka matlab hai constant, ek dafa value set hogayi tou bas
// na update ho sakti hai, na dobara declare

const country = "Pakistan"
// country = "India"      //  error 
console.log(country)      

// ==========================
// Without var, let, const
// ==========================
// JS mein agar var/let/const use na karo, tou variable directly ban jata hai
// Bilkul python ki tarah lagta hai
// Lekin ye risky hota hai, kyun k ye global variable ban jata hai by default
// jinko production level projects mi use krna achi approach nhi hai

cityName = "Islamabad"  // = global variable
console.log(cityName)

// Ye method work kraiga, but avoid karna chahiye in real projects

let studentName = "Areeba"
let age = 20
let isStudent = true

console.log("Name:", studentName)
console.log("Age:", age)
console.log("Student?", isStudent)

let favoriteFruit = "Guava"
let backupFruit = "Pomegranate"
console.log("i like", favoriteFruit, "but also eat", backupFruit)

let birthCity = "Faisalabad"
let currentCity = "Karachi"
console.log("Born in", birthCity, "now living in", currentCity)

const currency = "PKR"
console.log("Our currency is", currency)

// ==========================
// RECAP
// ==========================
// - var: use in older versions of js, re-declare allowed |  update allowed
// - let: use in new versions of js, re-declare not allowed | but update allowed
// - const: constant value,  re-declare not allowed | update also not allowed
// - bina kisi keyword k variable bhi ban jata hai (like Python) but risky
// - semicolon na lagao tou bhi JS chalti hai