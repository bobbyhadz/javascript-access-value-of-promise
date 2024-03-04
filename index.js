// EXAMPLE 1 - Access the value of a Promise in JavaScript

// 👇️ Example promise
const p = Promise.resolve('bobbyhadz.com');

p.then(value => {
  console.log(value); // 👉️ "bobbyhadz.com"
}).catch(err => {
  console.log(err);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - If the Promise is rejected, catch() is called

// // 👇️ Example rejected promise
// const p = Promise.reject('Something went wrong');

// p.then(value => {
//   console.log(value);
// }).catch(err => {
//   console.log(err); // 👉️ "Something went wrong"
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - The .then() method always returns a Promise

// const p = Promise.resolve(13);

// p.then(value => {
//   console.log(value); // 👉️ 13

//   return value + value;
// }).then(value => {
//   console.log(value); // 👉️ 26

//   return value + value;
// });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Access the value of a Promise using async/await

// // 👇️ example promise
// const p = Promise.resolve('bobbyhadz.com');

// async function example() {
//   try {
//     const value = await p;
//     console.log(value); // 👉️ "Hello World"
//   } catch (err) {
//     console.log(err);
//   }
// }

// example();

// ------------------------------------------------------------------

// // EXAMPLE 5 - Handling rejected promises in async/await

// // 👇️ Example rejected promise
// const p = Promise.reject('Something went wrong');

// async function example() {
//   try {
//     const value = await p;
//     console.log(value);
//   } catch (err) {
//     console.log(err); // 👉️ "Something went wrong"
//   }
// }

// example();
