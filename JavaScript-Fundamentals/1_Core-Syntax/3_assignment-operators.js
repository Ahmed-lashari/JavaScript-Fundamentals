// You must have noticed, in previous file we were useing a symbol like 
// " = " for assigning the values toa new variable
// This is called simple assignemnt operator

// ==========================
// 1. = (Simple Assignment)
// ==========================

let fruit = "Mango"
let city = "Karachi"
let age = 22

console.log("Fruit:", fruit)
console.log("City:", city)
console.log("Age:", age)

// ==========================
// 2. += (Addition and then assigning)
// ==========================

let marks = 70
marks += 10  
// exactly equal to => marks = marks + 10

console.log("Updated marks:", marks)

// ==========================
// 3. -= (Subtract ant then Assign)
// ==========================

let petrol = 50
petrol -= 15  
// exactly equal to => petrol = petrol - 15

console.log("Petrol left:", petrol)

// ==========================
// 4. *= (Multiply & Assign)
// ==========================

let apples = 4
apples *= 3  
// exactly equal to => apples = apples * 3

console.log("Total apples:", apples)

// ==========================
// 5. /= (Divide & Assign)
// ==========================
// Wahi value ko divide kar do

let rupees = 500
rupees /= 5 
// exactly equal to => rupees = rupees / 5

console.log("Per person share:", rupees)

// ==========================
// 6. %= (Modulus & Assign)
// ==========================

let mangoes = 10
mangoes %= 3  
// exactly equal to => mangoes = mangoes % 3

console.log("Leftover mangoes:", mangoes)

// ==========================
// BONUS: What if we don’t use assignment operators?
// ==========================
// we have to manually remeat variable name, like:
// marks = marks + 10
