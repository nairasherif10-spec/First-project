console.log("This is the rev.js file.")
const name = "rev.js"
const number = 42
console.log(`File name: ${name}, Number: ${number}`)
function add(a, b) {
  return a + b
}
console.log(`Addition result: ${add(5, 7)}`)
function multiply(a, b) {
  return a * b
}
console.log(`Multiplication result: ${multiply(5, 7)}`)
function divide(a, b) {
  return a / b
}
console.log(`Division result: ${divide(35, 7)}`)
const isstudent = true
console.log(`Is student: ${isstudent}`)
const fruits = ["apple", "banana", "cherry"]
console.log(`Fruits: ${fruits.join(", ")}`)
const person = { firstName: "John", lastName: "Doe", age: 30 }
console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`)
fruits.push("mango")
console.log(`Updated Fruits: ${fruits.join(", ")}`) 
person.age = 31
console.log (`Updated Age: ${person.age}`)
function addfruit(grape,orange){
  return grape + orange
}
console.log(`Fruit Addition result: ${addfruit(3, 4)}`)
function updateName(ahmed){
  return ahmed
}
console.log(`Updated Name: ${updateName("Ahmed")}`)
if (number > 50) {
  console.log("middle")
}
else if (number === 42) {
  console.log("good")
}
else {
  console.log("bad")
}
const colors = ["red", "green", "blue", "yellow"]
switch (colors[2]) {
  case "red":
    console.log("Color is Red")
    break
    case "green":
    console.log("Color is Green")
    break
    case "blue":
    console.log("Color is Blue")
    break
    case "yellow":
    console.log("Color is Yellow")
    break
    default:
    console.log("Color not found")
}
for (let i = 0; i < 9; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`)
}
let count = 0
while (count < 5) {
  console.log(`Count is: ${count}`)
  count++
}
console.log("End of rev.js file.")

console.log("help.")
