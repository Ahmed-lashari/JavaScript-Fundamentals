// SEXOND HITTER IS OBJECTS. |Technical BUt Interesting topic

// === OBJECTS ===

let student = {
name: "Hamza",
age: 20,
city: "Lahore",
passed: true
}

console.log(student.name)    // Hamza
console.log(student["city"]) // Lahore

student.age = 21             // update
student.gender = "Male"      // add new property

for (let key in student) {
console.log(key, "=>", student[key])
}
     


// Example: 2
let student2 = {
name: "Ali",
age: 21,
city: "Faisalabad",
hasLaptop: true
}

console.log(student2.name)      // Ali
console.log(student2["city"])   // Faisalabad

student2.age = 22               // update
student2.gender = "Male"        // add
delete student2.hasLaptop       // remove

for (let key in student2) {
console.log(key, ":", student2[key])
}
