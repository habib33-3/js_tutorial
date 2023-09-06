function changeToInt(v) {
  let result = parseInt(v);

  if (isNaN(result)) {
    return "please provide integer";
  } else {
    return result;
  }
}

console.log(changeToInt("h"));
