// =========================
// === FUCNTIONS ===
// =========================

// in ht e previous code you may have noticed that the code line;
// console.log(...) 
// kept repeting thrughut the lines so now just write a fucntion for printng the values to enhance speed a

function print(v){
console.log(v)
}

print('Hello world')// Hello World

// To wirte a function we must use the " function " key before asigning name to it

function greet(name, city) {
print("Assalamualaikum " + name + " from " + city)

}

greet("Ali", "Lahore")
greet("Sana", "Karachi")


// Function can asloe return values
function add(a, b) {
return a + b
}

let result = add(5, 7)
print("Sum is: "+ result)



// Anonymous Funtion
let printCity = function(city) {
print("Famous city of Pakistan:"+ city)

}

printCity("Multan")

// Anonymous Functions with the Modern JavaScript Syntax known as (Shorter Syntax)

const getFruit = (name) => {
return "You selected: " + name
}
print(getFruit("Mango"))


// if theres one line return, you can skip return and {}
const getFruit2 = name => "You selected: " + name
print(getFruit2("Apple"))

// Default parameter Value in the Fucntion
function orderBiryani(type = "Beef") {
print("You ordered: "+ type+ " Biryani")
}

orderBiryani("Chicken")
orderBiryani()  // Beef Biryani


// Passing an array tot he function
function showGuests(...names) {
print("Guests invited:")
for (let name of names) {
print(" - " + name)
}
}

showGuests("Ahmed", "Lashari", "Sara", "Zoya")

// Callback Fucntion
function doSomething(task) {
print("Starting the task...")
task()  // callback call
}

function callbackFunction() {
print("JavaScript is beeing learnt...")
}

doSomething(callbackFunction)


// Function for the callback uning for each
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"]

cities.forEach(function(city) {
print("Visiting: "+ city)
  
})

cities.forEach(city => print("Exploring: "+ city))


// TIMED FUNTIONS

print("Start Cooking...")

setTimeout(() => {
  print("Biryani is Ready!")   // Executes after 2 seconds
}, 2000)

print("Set the Table...")


// HIGHER ORDERED FUCNTIONs
function higherOrder(fn) {
       
print("I am a Main higher-order function.")
fn()
}

function lowerFunc() {
print("I am a Main Callback.")
}

higherOrder(lowerFunc)
