//1.how to declare a variable

const fatherName = "Golam Mowla"; //we cant change
let season = "winter"; //with let we can change the value
season = "rainy";
//ther is another one 'var' we don't use this,it is old.

//2.condition
//6 basic condition >,<,>=,<=,===,!==;
//multiple Condition:&&,||,

let age = 18;
if (age >= 18 && age < 30) {
  console.log("you are allowed to marry or having driving license");
} else {
  console.log("you should wait till 18");
}
//3.Array
const number = [2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number.length);
number.push(12);
// console.log(number);
//4.loop
let sum = 0;

for (i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);
//5.Function
//6.object
