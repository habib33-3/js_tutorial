const arr = [2, 3, 5, 2, 5, 9];

// let sum = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 10);

// console.log(sum);

// let max = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// });

// console.log(max);

function myReduce(arr, cb, acc) {
  for (const element of arr) {
    acc = cb(acc, element);
  }

  return acc;
}

let sum = myReduce(arr, function (prev, curr) {
  return prev + curr;
},0);

console.log(sum);
