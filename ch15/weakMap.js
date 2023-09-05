let a = {
  a: 10,
};
let b = {
  b: 20,
};

let weakMap = new WeakMap([
  [a, 22],
  [b, 44],
]);

console.log(weakMap);
