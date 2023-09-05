const obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

let iterate = obj[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

function* generate() {
  yield 1;
  yield 2;
  yield 3;
}
const arr = [1, 2, 3, 4];
function* generate2(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}

let it = generate2(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
