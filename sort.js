const arr = [-4, 85, 6, 7, 3, 4, 56, 5, -8, 8, 4, -9, 6, -2];

arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});


console.log(arr);