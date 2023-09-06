const arr = [1, 2, 3, 4];

let sqrArr = arr.map((i) => i * i);

function asyncMap(arr, cb) {
  return arr.map((i) => {
    setTimeout(cb.bind(null, i), 0);
  });
}

let qbArr = asyncMap(arr, (i) => {
  console.log(i);
});
console.log(qbArr);
