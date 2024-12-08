// const fruits = [["Banana", "Orange", "Apple", "Mango"],["chicken", "beef", "turkey", "fish"],["dove"],["dog"]]

// delete fruits[0][1]
// console.log(fruits);
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }
//  let fullname =getFullName(persons)
//   console.log(fullname);
//   const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);
// 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

console.log(fruits);
let maping=fruits.map((fruit)=>fruit.split(','));
console.log(maping);




// var value = 'foo'; // by default
// var myGrid = [...Array(6)].map(e => Array(6).fill(value));
// console.log(myGrid);
