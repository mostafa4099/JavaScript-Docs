//... (spread) used to copy an array or object to another one with optional new values
//Array Spread
const numbers = [1,2,3];
const newNumbers = [numbers, 4];
const newNumbersWithSpread = [...numbers];
const newNumbersWithSpreadAndNewValue = [...numbers, 4];

console.log(newNumbers); //[[1, 2, 3], 4]
console.log(newNumbersWithSpread); //[1, 2, 3]
console.log(newNumbersWithSpreadAndNewValue); //[1, 2, 3, 4]

//object spread
const person = {
    name : "Mostafa"
  };
  
  const newPerson = {
    ...person,
    age: 31
  };
  
  console.log(person.name); //"Mostafa"
  console.log(newPerson.name); //"Mostafa"

  //... (rest) used to add multiple element as a function argument which will be store as array
  const filter = (...args) => {
    console.log(args); //[5, 4, 2]
    args.forEach(el => console.log(el));//5  4  2
    return args.filter(el => el == 2);
  }
  
  console.log(filter(5, 4, 2)); //[2]