let student = {
name: "Ahmed",
city: "Peshawar",
intro: function () {
       console.log("Mera naam " + this.name + " hai, aur mein " + this.city + " se hoon.")
}
}
     
student.intro()
     


class Mehmaan {
constructor(name, from) {
       this.name = name
       this.from = from
}

welcome() {
       console.log("Khush aamdeed " + this.name + " from " + this.from)
}
}

let guest1 = new Mehmaan("Ahmed", "Peshawar")
guest1.welcome()
