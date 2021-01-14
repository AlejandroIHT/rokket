//---- 4. Only last names ----//
const contacts = [
  { firstName: "Juanito", lastName: "Rokket" },
  { firstName: "James", lastName: "Bond" },
  { firstName: "Harry", lastName: "Potter" },
];

function rokket(persons) {
  const lasNames = persons.map((person) => person.lastName);
  return lasNames;
}

console.log(rokket(contacts)); // this outputs ['Rokket', 'Bond', 'Potter']

//---- Finish Only last names ----//
