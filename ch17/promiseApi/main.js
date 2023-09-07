// const delay = (s) => new Promise((resolve) => setTimeout(resolve, s*1000));
// delay(2).then(() => console.log("2 seconds"));
// delay(1).then(() => console.log("1 seconds"));
// delay(4).then(() => console.log("4 seconds"));
// delay(2).then(() => console.log("2 seconds"));

// let p1 = Promise.resolve("test");
// p1.then((v) => console.log(v));

// let p1 = Promise.resolve("1");
// let p2 = Promise.resolve("2");
// let p3 = Promise.resolve("3");
// let p4 = Promise.resolve("4");

// let promiseArr = [p1, p2, p3, p4];

// Promise.all(promiseArr).then((arr) => {
//   console.log(arr);
// });

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "one");
});

let p2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "two");
});

let p3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "three");
});
let promiseArr = [p1, p2, p3];

Promise.race(promiseArr).then((arr) => console.log(arr));
