//destucturing array
const numbers = [1,2,3];
[a, b] = numbers;
console.log(a);//1
console.log(b);//2

[a, , b] = numbers;
console.log(a);//1
console.log(b);//3

//destucturing object
// const person = {
//     name: "Mostafa",
//     age: 31
//   };
  
//   {name} = person;
//   console.log(name);//"Mostafa"