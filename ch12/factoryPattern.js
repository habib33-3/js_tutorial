let createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("rect");
      this.printProperties();
    },

    printProperties: function () {
      console.log(`width: ${this.width}`);
      console.log(`height: ${this.height}`);
    },
  };
};

let rect1 = createRect(100, 33);
rect1.draw();
