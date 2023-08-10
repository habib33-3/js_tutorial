const arr = [
  [78, 44, 55, 66, 33],
  [33, 44, 66, 98, 12],
  [33, 44, 66, 98, 12],
];

for (let i = 0; i < arr.length; i++) {
  for (const element of arr[i]) {
    console.log("elements " + i + ":" + element);
  }
}
