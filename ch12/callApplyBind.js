function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}
// myFunc();

// call apply

myFunc.call({ a: 3, b: 4 }, 3, 5);
myFunc.apply({ a: 3, b: 4 }, [3, 5]);

// bind
let testBind = myFunc.bind({ a: 3, b: 4 }, 3, 5);
testBind()