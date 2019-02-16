// const person = {
//   name: "Nicholas",
//   age: 23,
//   location: { city: "Salt Lake", temp: 3 }
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${name} is ${age} and lives in ${city}.  Temp is ${temperature}`);

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguine"
  }
};

const { title, author } = book;
const { name: publisherName = "Self Published" } = book.publisher;
console.log(publisherName);
