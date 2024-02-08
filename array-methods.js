const products = [
  { name: "laptop", price: 32000, brand: "Lenevo", color: "silver" },
  { name: "Mobile", price: 2000, brand: "Iphone", color: "blue" },
  { name: "Fridge", price: 3000, brand: "HP", color: "White" },
  { name: "tab", price: 3200, brand: "i-pad", color: "Black" },
];

const Brands = products.map((item) => item.brand);
console.log(Brands);
const Prices = products.map((jinish) => jinish.price);
console.log(Prices);
