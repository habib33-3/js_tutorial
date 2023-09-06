// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "one");
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "two");
// });

// p1.then((v) => {
//   console.log(v);
// }).catch((e) => console.log(e));

function getIphone(isPasses) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPasses) {
        resolve("PASS");
      } else {
        reject("fail");
      }
    }, 2000);
  });

  return promise;
}

getIphone(true).then((res) => console.log(res));
