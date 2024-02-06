const Person = {
  firstName: "saiful",
  lastName: "islam",
  age: 28,
};
//# 3ways to access property
const myAge = "age";
console.log(Person.firstName);
console.log(Person["lastName"]);
console.log(Person[myAge]);
