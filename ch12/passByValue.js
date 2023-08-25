let n = 10;

function change(n) {
  n = n + 100;
  console.log(n);
}

change(n);
console.log(n);

let obj = {
  a: 10,
  b: 10,
};

function changObj(obj) {
  obj.a = obj.a + 100;
  obj.b = obj.b + 100;
  console.log(obj);
}


changObj(obj)
console.log(obj);