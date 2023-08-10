const arr = [3, 5, 2, 5, 6, 8, 5, 4, 2, 1];

let find = 3;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("data found at " + i);
    isFound = true;
  }
}

if (!isFound) {
  console.log("data not found");
}
