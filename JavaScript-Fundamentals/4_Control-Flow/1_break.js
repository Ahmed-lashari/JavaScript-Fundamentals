// is Dahi bhallay are found then do not search further

let bazarItems = ["Aloo", "Tamatar", "Dahi Bhallay", "Onion", "Matar"]

for (let item of bazarItems) {
  if (item === "Dahi Bhallay") {
    console.log("Dahi Bhallay fonud, yummy")
    break
  }

  console.log("Talash jaari: " + item)
}
