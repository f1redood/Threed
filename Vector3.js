export default class Vector3 {
  static ZERO = new Vector3(0, 0, 0);
  
  constructor(x, y, z) {
    [this.x, this.y, this.z] = [x, y, z];
  }
  
  add(v) {
    if (v instanceof Vector3) {
      return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    } else {
      return new Vector3(this.x + v, this.y + v, this.z + v);
    }
  }

  sub(v) {
    if (v instanceof Vector3) {
      return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    } else {
      return new Vector3(this.x - v, this.y - v, this.z - v);
    }
  }

  mul(v) {
    if (v instanceof Vector3) {
      return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
    } else {
      return new Vector3(this.x * v, this.y * v, this.z * v);
    }
  }

  div(v) {
    if (v instanceof Vector3) {
      return new Vector3(this.x / v.x, this.y / v.y, this.z / v.z);
    } else {
      return new Vector3(this.x / v, this.y / v, this.z / v);
    }
  }

  pow(v) {
    if (v instanceof Vector3) {
      return new Vector3(Math.pow(this.x, v.x), Math.pow(this.y, v.y), Math.pow(this.z, v.z));
    } else {
      return new Vector3(Math.pow(this.x, v), Math.pow(this.y, v), Math.pow(this.z, v));
    }
  }

  rotateX(x) {
    var u = this.x;
    var v = this.y;
    var w = this.z
    return new Vector3(u, v * Math.cos(x) - w * Math.sin(x), w * Math.cos(x) + v * Math.sin(x));
  }

  rotateY(x) {
    var u = this.x;
    var v = this.y;
    var w = this.z
    return new Vector3(u * Math.cos(x) + w * Math.sin(x), v, w * Math.cos(x) - u * Math.sin(x));
  }

  rotateZ(x) {
    var u = this.x;
    var v = this.y;
    var w = this.z
    return new Vector3(u * Math.cos(x) - v * Math.sin(x), v * Math.cos(x) + u * Math.sin(x), w);
  }
}
