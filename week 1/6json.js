//json basically is a data format that is used to store and exchange data.
// It is easy to read and write for humans and easy to parse and generate for machines.
// JSON stands for JavaScript Object Notation.
// It is a string of an object or an array, which can be used to represent structured data.

const users = '{"name": "John", "age": 30, "city": "New York"}';

//JSON.parse(json object string) converts a JSON string into a JavaScript object.
const userObject = JSON.parse(users);

// Now you can access the properties of the object
console.log(userObject['name']);


//JSON.stringify(object) converts a JavaScript object into a JSON string.
const userString = JSON.stringify(userObject);
console.log(userString);

//userString is a string representation of the object. So the below output will be undefined
// console.log(userString.name); // This will not work as userString is a string, not an object
console.log(userString['name']);


//JSON can also be used to store arrays
const fruits = ["apple", "banana", "cherry"];
const fruitsString = JSON.stringify(fruits);
console.log(fruitsString);

