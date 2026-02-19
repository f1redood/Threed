export default class Vector4 {
  constructor(x, y, z, w) {
    [this.x, this.y, this.z, this.w] = [x, y, z, w];
  }

  static fromVec3(vec3, w) {
    return new Vector4(vec3.x, vec3.y, vec3.z, w);
  }

  add(v) {
    if (v instanceof Vector4) {
      return new Vector4(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w);
    } else {
      return new Vector4(this.x + v, this.y + v, this.z + v, this.w + v);
    }
  }

  sub(v) {
    if (v instanceof Vector4) {
      return new Vector4(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w);
    } else {
      return new Vector4(this.x - v, this.y - v, this.z - v, this.w - v);
    }
  }

  mul(v) {
    if (v instanceof Vector4) {
      return new Vector4(this.x * v.x, this.y * v.y, this.z * v.z, this.w * v.w);
    } else {
      return new Vector4(this.x * v, this.y * v, this.z * v, this.w * v);
    }
  }

  div(v) {
    if (v instanceof Vector4) {
      return new Vector4(this.x / v.x, this.y / v.y, this.z / v.z, this.w / v.w);
    } else {
      return new Vector4(this.x / v, this.y / v, this.z / v, this.w / v);
    }
  }

  pow(v) {
    if (v instanceof Vector4) {
      return new Vector4(Math.pow(this.x, v.x), Math.pow(this.y, v.y), Math.pow(this.z, v.z), Math.pow(this.w, v.w));
    } else {
      return new Vector4(Math.pow(this.x, v), Math.pow(this.y, v), Math.pow(this.z, v), Math.pow(this.w, v));
    }
  }

  mulMatrix(mat) {
    return new Vector4(
      this.x * mat.x.x + this.y * mat.y.x + this.z * mat.z.x + this.w * mat.w.x,
      this.x * mat.x.y + this.y * mat.y.y + this.z * mat.z.y + this.w * mat.w.y,
      this.x * mat.x.z + this.y * mat.y.z + this.z * mat.z.z + this.w * mat.w.z,
      this.x * mat.x.w + this.y * mat.y.w + this.z * mat.z.w + this.w * mat.w.w
    );
  }
}
