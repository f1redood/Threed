export default class Vector3 {
  constructor(x, y, z) {
    [this.x, this.y, this.z] = [x, y, z];
  }
  
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  add(x) {
    this.x += x;
    this.y += x;
    this.z += x;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
  sub(x) {
    this.x -= x;
    this.y -= x;
    this.z -= x;
  }

  mul(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
  }
  mul(v) {
    this.x *= x;
    this.y *= x;
    this.z *= x;
  }

  div(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
  }
  div(x) {
    this.x /= x;
    this.y /= x;
    this.z /= x;
  }

  pow(v) {
    this.x = Math.pow(this.x, v.x);
    this.y = Math.pow(this.y, v.y);
    this.z = Math.pow(this.z, v.z);
  }
  pow(v) {
    this.x = Math.pow(this.x, x);
    this.y = Math.pow(this.y, x);
    this.z = Math.pow(this.z, x);
  }
}
