const myVar = 5;
if (myVar) {
  // console.log("saiful");
}
const name = 0;
if (!name) {
  // console.log(1);
} else {
  // console.log(2);
}

//Ternary Operator
const money = 101;
let food;
// if (money > 100) {
//   food = "biryani";
// } else {
//   food = "cha biscuit";
// }
const meal = money > 100 ? (food = "biriyani") : (food = "cha-biscuit");
// console.log(meal);

//coversion number to string
const num1 = 52;
// const str = String(num1);//const str =(num1+ " ");
// console.log(typeof str);
//conversion str to number
const string = "100";
// console.log(typeof string);
const newNum = Number(string); //newNum=+string[shortcut]
// console.log(typeof newNum);

const isActive = true;
const showUser = () => console.log("show Display");
const hideUser = () => console.log("Hide DIsplay");
// isActive ? showUser() : hideUser();
//shortCut
//use && if the left side is true then right side will be executed.
isActive && showUser();
