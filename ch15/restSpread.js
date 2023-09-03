function sum(...rest) {
  return rest.reduce((a, b) => a + b);
}
console.log(sum(2,3,7,6));