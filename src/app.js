class circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value < 0) {
        throw new Error("Radius cannot be detachable ");
      }
      this._radius = value;
    }
  
    get diameter() {
      return 2 * this.radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    circumference() {
      return 2 * Math.PI * this.radius;
    }
}


const datas = prompt('write parameters');
const circleInfo = new circle(datas);
console.log(circleInfo.radius);
console.log(circleInfo.diameter);
console.log(circleInfo.area());
console.log(circleInfo.circumference());