//
//Object destructuring
//

// const person = {
//   name: "Nicholas",
//   age: 23,
//   location: { city: "Salt Lake", temp: 3 }
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${name} is ${age} and lives in ${city}.  Temp is ${temperature}`);

//
//Object destructuring
//

// const address = ["2342 W. 520 N.", "Lehi", "Ut", "84043"];
// const [Street, City, State, Zip] = address;
// console.log(`You are in ${Street} ${City} ${State}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} ${medium} `);
