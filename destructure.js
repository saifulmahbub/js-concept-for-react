//Array Destructuring
const numbers = [20, 12];
// const x = numbers[0];
// const y = numbers[1];
//const [x, y] = [20, 12];
const [x, y] = numbers;

console.log(x, y);

//destructuing function
const box = (num1, num2) => {
  const num = [num1, num2];
  return num;
};
const [first, second] = box(2, 4);
console.log(first);
