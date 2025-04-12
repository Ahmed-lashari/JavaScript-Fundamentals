// " new " is used to create a new object inside and class constructor or function.

function Rickshaw(driver) {
       this.driver = driver
       this.ride = function () {
         console.log(this.driver + " is ready to tech us JavaScript.")
       }
     }
     
let r1 = new Rickshaw("Ahmed Bro")
r1.ride()
     


// Class example with new
class Animal {
       constructor(type) {
         this.type = type
       }
     
       speak() {
         console.log("This is a " + this.type +".")
       }
     }
     
let a1 = new Animal("Goat")
a1.speak()
     