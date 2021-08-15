class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("draw circle with radius", this.radius);
  }
}

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}