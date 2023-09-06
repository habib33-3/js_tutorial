function makeWords(text) {
  try {
    let str = text.trim();
    let word = str.split(" ");
    return word;
  } catch (e) {
    return e.message;
  }
}

console.log(makeWords(3));
