const arr = [1, 2, 4, 6, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

function createIterator(collection) {
  let i = 0;
  return {
    next() {
      return {
        done: i >= collection.length,
        value: collection[i++],
      };
    },
  };
}

const iterate = createIterator(arr);

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
