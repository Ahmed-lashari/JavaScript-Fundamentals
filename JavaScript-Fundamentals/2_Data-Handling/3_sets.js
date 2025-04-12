// === SETS ===
// Sets only Sptre unique values in it , unlike arrays or objectsm where value canbe repeated

let uniqueCities = new Set() // created objects of the " set " data structure
uniqueCities.add("Karachi")
uniqueCities.add("Lahore")
uniqueCities.add("Islamabad")
uniqueCities.add("Karachi")  // won't add again

console.log(uniqueCities) // only 3 unique values

for (let city of uniqueCities) {
  console.log("City:", city)
}


console.log(uniqueCities.has("Lahore"))  // true

