// Callbacks are exactly like saying;
// after cleaning the rooom you must clean the kitchen


/// in hte same way, after calling a function , call another function from that same fucntion is called callback in JaavaScript


function greet(name, callback) {
console.log("Assalamualaikum " + name)
callback()
}

function askForTea() {
console.log("Will you take a Tea?")
}

greet("Ahmed", askForTea)


// TYPES OF CALLBACK FUNCTIONS IN JAVASCRIPT
 // 1. Anonymous Callback

 greet("Ahmed Lashari", function () {
       console.log("No bro, I like coffee.")
     })

// 2. Callback with Delay Funcionality
console.log("is food ready?")

setTimeout(function () {
  console.log("It is Ready to eat")
}, 3000)  // 3 seconds delay

console.log("Amna is cutting the vegetables...")



// 3. passing values in hte callbak=ck (Custom appriach)
function calculate(a, b, operation) {
       return operation(a, b)
     }

let result = calculate(5, 3, function (x, y) {
return x * y
})

console.log("Result: " + result)
     

// Last one; Nested Callback Methods
setTimeout(() => {
       console.log("Motivatio High")
       setTimeout(() => {
         console.log("Skill Learning")
         setTimeout(() => {
           console.log("Target Set")
         }, 1000)
       }, 1000)
     }, 1000)
     


// ================================================================================


// functions executing (runnign) in parallel (side by side) with other functions are called asynchronous functions

// Set Time OUT Syntax
// setTimeout( function defination, time in milliseconds)

function myFunction() {
  console.log("I love JavaScript!")
}
setTimeout(myFunction, 3000);

/*
In the example above, myFunction is used as a callback.
myFunction is passed to setTimeout() as an argument.
3000  milliseconds time-out = delay of 3 seconds before calling " myFunction() "
*/

setInterval(myFunction2, 2000);
function myFunction2() {
  let d = new Date();
  console.log(
         d.getHours() + ":" +
         d.getMinutes() + ":" +
         d.getSeconds())
  }
// setTimeout() is used to call a specific method/function after each set time




