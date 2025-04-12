// === MAPS ===

let studentMarks = new Map()

studentMarks.set("Ahmed", 88)
studentMarks.set("Sana", 92)
studentMarks.set("Ali", 74)

console.log(studentMarks.get("Sana"))  // 92

for (let [name, marks] of studentMarks) {
  console.log(name, "scored", marks)
}
