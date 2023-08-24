let rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("rect");
    this.printProperties();
  },

  printProperties: function () {
    console.log(`width: ${this.width}`);
    console.log(`height: ${this.height}`);
  },
};

rect.draw();
