const products = [
  { name: "laptop", price: 32000, brand: "Lenevo", color: "silver" },
  { name: "Mobile", price: 2000, brand: "Iphone", color: "blue" },
  { name: "Fridge", price: 3000, brand: "HP", color: "White" },
  { name: "tab", price: 3200, brand: "i-pad", color: "Black" },
];

const Brands = products.map((item) => item.brand);
//console.log(Brands);
const Prices = products.map((jinish) => jinish.price);
//console.log(Prices);
//for Each method
// products.forEach((item) => console.log(item.color));
products.forEach((product) => {
  // console.log(product.name);
});
//FIlter Methods
const cheapest = products.filter((item) => item.price <= 3000);
//console.log(cheapest);

const n = products.filter((item) => item.name.includes("b"));
// console.log(n);

//Find Methods
const khuja = products.find((item) => item.name.includes("b"));
console.log(khuja);
