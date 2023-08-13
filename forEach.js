const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

// arr.forEach(function (value, index, arr) {
//   //   console.log(value, index, arr);
//   sum += value;
// });

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(arr, function (value, index, array) {
  console.log(value, index, array);
});
