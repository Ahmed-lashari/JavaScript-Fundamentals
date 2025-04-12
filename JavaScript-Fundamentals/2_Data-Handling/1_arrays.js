// NOW THE 4 HEAVY HITTES OF JAVASCRIPT STARTS

// THE FIRST ONE is Arrays

// === ARRAYS ===

let pakistaniFoods = ["Biryani", "Nihari", "Haleem", "Samosa"]

console.log(pakistaniFoods[0]) // Biryani
console.log(pakistaniFoods.length) // 4



pakistaniFoods.push("Korma") // add item
pakistaniFoods.pop()         // remove last item


for (let food of pakistaniFoods) {
       console.log("Today's Dish:", food)
     }



let fruits = ["Apple", "Banana", "Mango", "Mango"]

console.log(fruits[0])       // Apple
console.log(fruits.length)   // 4

fruits.push("Guava")         // Add to end
fruits.unshift("Orange")     // Add to start

fruits.pop()                 // Remove from end
fruits.shift()               // Remove from start

for (let fruit of fruits) {
  console.log("Fruit:", fruit)
}


