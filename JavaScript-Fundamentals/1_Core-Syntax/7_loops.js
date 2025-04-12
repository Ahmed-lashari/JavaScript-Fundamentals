// === FOR LOOP ===


consloe.log('Roll Number: 1')
consloe.log('Roll Number: 2')
consloe.log('Roll Number: 3')
consloe.log('Roll Number: 4')
consloe.log('Roll Number: 5')
consloe.log('Roll Number: 6')
consloe.log('Roll Number: 7')
consloe.log('Roll Number: 8')
consloe.log('Roll Number: 9')
consloe.log('Roll Number: 10')


// instead of repeatinf the boilerplate code we use loops to minimie the lines of code

//Displaying Roll numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
console.log("Roll Number:", i)
}

// Printing fruits
let fruits = ["Mango", "Banana", "Guava", "Apple"] // [ ... ] will be explained in the next lecture as location: JavaScript-Fundamentals/2_Data-Handling/1_arrays.js

for (let i = 0; i < fruits.length; i++) {
console.log("Fruit:", fruits[i])
}


// === FOR...IN LOOP ===
// Printing a student details (object keys) // see next lecture after arrays
let student = {
name: "Ali",
city: "Lahore",
age: 20
}

for (let key in student) {
console.log(key, ":", student[key])
}

//  Looping through indexed array
let cars = ["Honda", "Suzuki", "Toyota"]

for (let index in cars) {
console.log("Index:", index, "Brand:", cars[index])
}


// === FOR...OF LOOP ===
// Printing Cities of Pakistan from array
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]

for (let city of cities) {
console.log("City:", city)
}

// Looping over characters in a string // string is an array of characters
let name = "Hamza"

for (let char of name) {
console.log("Character:", char)
}


// === WHILE LOOP ===
// Printing numbers from 1 to 5
let i = 1

while (i <= 5) {
console.log("Number:", i)
i++
}

//  Countdown from 5 to 1
let count = 5

while (count > 0) {
console.log("Countdown:", count)
count--
}



// === DO...WHILE LOOP ===
//  Run loop at least once
let a = 10

do {
console.log("Value of a:", a)
a++
} while (a < 10)  // still runs once

//  Print name 3 times
let countName = 1

do {
console.log("My name is Bilal")
countName++
} while (countName <= 3)



// ==============================
// === RECAP ===
// ==============================

// FOR LOOP
for (let i = 0; i < 3; i++) {
console.log("Pakistan Zindabad!")
}

let names = ["Ahmed", "Usman", "Saad"]
for (let i = 0; i < names.length; i++) {
console.log("Student:", names[i])
}

// FOR...IN LOOP
let laptop = { brand: "HP", ram: "8GB", price: 75000 }
for (let key in laptop) {
console.log(key, "=>", laptop[key])
}

let buses = ["Green Line", "Orange Line", "Metro"]
for (let index in buses) {
console.log("Bus:", buses[index])
}

// FOR...OF LOOP
let snacks = ["Samosa", "Pakora", "Roll"]
for (let item of snacks) {
console.log("I like:", item)
}

let msg = "Hello"
for (let ch of msg) {
console.log(ch)
}

// WHILE LOOP
let x = 1
while (x <= 3) {
console.log("I love biryani")
x++
}

let y = 3
while (y > 0) {
console.log("Countdown:", y)
y--
}

// DO...WHILE LOOP
let z = 5
do {
console.log("Running even if condition false")
z++
} while (z < 5)

let loopCount = 1
do {
console.log("Practice makes perfect")
loopCount++
} while (loopCount <= 3)
