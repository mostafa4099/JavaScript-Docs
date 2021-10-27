//primitive type are pass by value. it copy the value only
let number = 2;
let num = number;
number = 3;
console.log(number); //3
console.log(num); //2

//object and array are pass by reference. when copy an object or array it copies only the reference pointer.
let person = {
    name : "Mostafa"
}

let copiedPerson = person;
person.name = "Golam"

console.log(person.name); //"Golam"
console.log(copiedPerson.name); //"Golam"

//to avoid pass by reference use spread syntex which will copy the values not the reference pointer.
let person = {
    name : "Mostafa"
}

let copiedPerson = {
    ...person
}
person.name = "Golam"

console.log(person.name); //"Golam"
console.log(copiedPerson.name); //"Mostafa"