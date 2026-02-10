import { d } from "./date.index.js";

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // this is static methods
  static whoAmI() {
    return "I am Rectangle";
  }

  // this is non static method
  getarea() {
    const area = this.width * this.height;
    return area;
  }

  // this is non static method
  parameter() {
    return 2 * (this.width * this.height);
  }
}

const r1 = new Rectangle(20, 20, "blue");
const r2 = new Rectangle(10, 15, "red");

console.log(r1.getarea());
console.log(r1.parameter());

console.log("\n");

console.log(r2.getarea());
console.log(r2.parameter());
console.log(r2.color);

// static methods dont get attach to internals objects but they attached to direct class itself. in this case  - Rectangle

// console.log(r1.whoAmI())       // this will throw error

console.log(Rectangle.whoAmI());
