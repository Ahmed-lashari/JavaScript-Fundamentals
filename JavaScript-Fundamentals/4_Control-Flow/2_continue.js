// only fresh fruits are needed, skip the rotten ones

let fruits = ["Apple", "Rotten Banana", "Mango", "Rotten Orange", "Peach"]

for (let fruit of fruits) {
  if (fruit.includes("Rotten")) {
    continue  // skip this fruit
  }

  console.log("Liya: " + fruit)
}
