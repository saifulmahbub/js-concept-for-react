//Array Destructuring
const numbers = [20, 12];
// const x = numbers[0];
// const y = numbers[1];
//const [x, y] = [20, 12];
// const [x, y] = numbers;

// console.log(x, y);

//destructuing function
const box = (num1, num2) => {
  const num = [num1, num2];
  return num;
};
const [first, second] = box(2, 4);
// console.log(first);
//object destrucring

const Person = {
  firstName: "saiful",
  lastName: "islam",
  age: 28,
  watch: ["youtube", "facebook", "instagram"],
};
const [watch1, watch2, watch3] = Person.watch;
// console.log(watch2);
const employee = {
  ide: "vs code",
  designation: "developer",
  machine: "Mac",
  language: ["html", "css", "react"],
  specification: {
    height: 66,
    weight: 80,
    address: "noakhali",
    drink: "water",
  },
};

const { machine, ide } = employee;
const { address, height } = employee.specification;
console.log(address, height);
