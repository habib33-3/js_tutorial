const arr = [2, 4, 6, 7, 33, 44, 56, 77];

// let result = arr.find(function (value) {
//   return value === 7;
// });

// console.log(result);

// let result = arr.findIndex(function (value) {
//   return value === 7;
// });

// console.log(result);

function myFind(arr, cb) {
  for (const element of arr) {
    if (cb(element)) {
      return element;
    }
  }
}

let result = myFind(arr, function (value) {
  return value === 9;
});

console.log(result);
