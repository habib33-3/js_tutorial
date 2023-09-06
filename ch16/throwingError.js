try {
  console.log(1);
  throw new Error("error");
} catch (e) {
  console.log(e.message);
}
