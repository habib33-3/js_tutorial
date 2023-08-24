function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = currying(5)(6)(6);
console.log(result);
