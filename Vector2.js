export default class Vector2 {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }
  
  add(v) {
    if (v instanceof Vector2) {
      this.x += v.x;
      this.y += v.y;
    } else {
      this.x += v;
      this.y += v;
    }
  }

  sub(v) {
    if (v instanceof Vector2) {
      this.x -= v.x;
      this.y -= v.y;
    } else {
      this.x -= v;
      this.y -= v;
    }
  }

  mul(v) {
    if (v instanceof Vector2) {
      this.x *= v.x;
      this.y *= v.y;
    } else {
      this.x *= v;
      this.y *= v;
    }
  }

  div(v) {
    if (v instanceof Vector2) {
      this.x /= v.x;
      this.y /= v.y;
    } else {
      this.x /= v;
      this.y /= v;
    }
  }

  pow(v) {
    if (v instanceof Vector2) {
      this.x = Math.pow(this.x, v.x);
      this.y = Math.pow(this.y, v.y);
    } else {
      this.x = Math.pow(this.x, v);
      this.y += Math.pow(this.y, v);
    }
  }

  rotate(x) {
    var u = this.x;
    var v = this.y;
    this.x = (u * Math.cos(x) - v * Math.sin(x));
    this.y = (u * Math.sin(x) + v * Math.cos(x));
  }
}
