//json :1.Stringyfy 2.Parse
const Person = {
  firstName: "saiful",
  lastName: "islam",
  age: 28,
};
const personJson = JSON.stringify(Person);
console.log(Person);
console.log(personJson);
const studentObj = JSON.parse(personJson);
console.log(studentObj);

//Fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));
