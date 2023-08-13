const arr = [2, 3, 4, 67, 21, 2, 3];

function myFilter(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);
