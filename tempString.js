const number = [2, 3, 4, 5, 6, 7, 8, 9];
const Person = {
  firstName: "saiful",
  lastName: "islam",
  age: 28,
};
// ${person.firstName}
// ${Person["lastName"]}
const saiful = `${Person.firstName} is a good boy and he has ${number[1]} children.His family name is ${Person["lastName"]} `;
console.log(saiful);
