// Basic syntax for classes in the Javascript


// I finally installed the prettier extension
class Car {
constructor(name, model) {
       this.name = name
       this.model = model
}

start() {
       console.log(this.name + " " + this.model + " is starting...")
}

honk() {
       console.log(this.name + " says: Peeeeeeeeeeeep")
}
}

let car1 = new Car("Suzuki", "Mehran")
car1.start()
car1.honk()


// Anotehr exmample

class Student {
constructor(name, city) {
       this.name = name
       this.city = city
}

introduce() {
       console.log("I am " + this.name + " from " + this.city)
}

isFrom(cityName) {
       return this.city === cityName
}
}

let s1 = new Student("Ahmed Lashari", "Peshawar")
s1.introduce()

if (s1.isFrom("Islamabad")) {
console.log("I am also from the same city bro!")
}



// INGERITANCE IN THE JAVASCRIPT EXACTLY LIKE CPP
class Person {
constructor(name) {
       this.name = name
}

greet() {
       console.log("Hello, my name is " + this.name)
}
}

class Teacher extends Person {
constructor(name, subject) {
       super(name) // parent class constructor call
       this.subject = subject
}

teach() {
       console.log(this.name + " is teaching " + this.subject)
}
}

let t1 = new Teacher("Ahmed Lashari", "JavaScript")
t1.greet()   
t1.teach()   
     

// ENCAPSULATION IN JAVASCRIPT
class BankAccount {
#balance = 0   

deposit(amount) {
       this.#balance += amount
}

showBalance() {
       console.log("Current balance: " + this.#balance)
}
}

let account = new BankAccount()
account.deposit(5000)
account.showBalance()
// account.#balance = 10000   //Error , direct access not allowed
     

// STATIC METHOD INSDE CLASS
class JavaScriptUtils {
static add(a, b) {
       return a + b
}
}

console.log(JavaScriptUtils.add(4, 6))  // 10
