class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getarea() {
    const area = this.width * this.height;
    return area;
  }
}

let r1 = new Rectangle(20, 30, "black");
console.log(r1.getarea());
