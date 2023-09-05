let a = {
  a: 10,
};
let b = {
  b: 20,
};

let weakSet = new WeakSet([a, b]);

console.log(weakSet);
