function greet(msg) {
  function greetings(name) {
    return msg + " " + name + "!";
  }

  return greetings;
}

let gm = greet("hello");

let msg = gm("alex");

console.log(msg);
