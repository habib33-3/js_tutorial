function test() {
  console.log("Something");
}

let Rect = new Function(
  "width",
  "height",
  `this.width = width
this.height = height

this.draw = function () {
  console.log("rect")
  this.printProperties()
};

this.printProperties = function () {
console.log("width"+ width)
console.log("height"+ height)
}`
);

let rect4 = new Rect(4, 7);

console.log(rect4);
