//json :1.Stringyfy 2.Parse
const Person = {
  firstName: "saiful",
  lastName: "islam",
  age: 28,
};
// const personJson = JSON.stringify(Person);
// // console.log(Person);
// // console.log(personJson);
// const studentObj = JSON.parse(personJson);
// // console.log(studentObj);

// //Fetch
// fetch("url").then((res) => res.json());
// .then((data) => console.log(data));

//keys and values
const key = Object.keys(Person);
const values = Object.values(Person);
// console.log(key, values);

//for
const numbers = [2, 4, 5, 6, 8, 10];
let sum = 2;
// numbers.forEach((add) => console.log(add + sum));
// numbers.map((d) => console.log(d + 5));
// we will use for of an array like object
//we will use for in on object

//add or remove data from object
const products = [
  { name: "laptop", price: 32000, brand: "Lenevo", color: "silver" },
  { name: "Mobile", price: 2000, brand: "Iphone", color: "blue" },
  { name: "Fridge", price: 3000, brand: "HP", color: "White" },
  { name: "tab", price: 3200, brand: "i-pad", color: "Black" },
];
const newProduct = {
  name: "webcame",
  price: 1200,
  brand: "fuji",
  color: "Black",
};
const newArray = [...products, newProduct];

// console.log(newArray);

//remove a product from array.
const remaining = newArray.filter((p) => p.name !== "Mobile");
console.log(remaining);
