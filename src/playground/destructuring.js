// Object destructuring

// const person = {
//     name: 'Jamie',
//     age: 38,
//     location: {
//         city: 'Bath',
//         temp: 44
//     }
// };

// // Demonstrating how to set up default values with renaiming.
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// Array destructuring demo

const address = ['first floor flat 12a', 'North Parade', 'Bath', 'Somerset', 'BA2 4AL'];
const [houseNumber, street = 'A street default', city, county, postcode] = address;

console.log(`My address is ${houseNumber}, ${street}`)