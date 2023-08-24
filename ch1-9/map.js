function myMap(arr, cb) {
  const newArr = [];
  for (const element of arr) {
    const temp = cb(element);
    newArr.push(temp);
  }
  return newArr;
}
const arr = [1, 3, 4, 5, 6, 8];
let qb = myMap(arr, function (value) {
  return value * value * value;
});
console.log(qb);