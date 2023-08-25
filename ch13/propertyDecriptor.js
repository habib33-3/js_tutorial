let person = {
  name: "Alex",
};

let descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);

let baseObj = Object.getPrototypeOf(person);
let descriptorBase = Object.getOwnPropertyDescriptor(baseObj, "toString");
console.log(descriptorBase);

Object.defineProperty(person, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
});
