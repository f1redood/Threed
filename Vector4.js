export default class Vector4 {
  constructor(x, y, z, w) {
    [this.x, this.y, this.z, this.w] = [x, y, z, w];
  }

  static fromVec3(vec3, w) {
    return new Vector4(vec3.x, vec3.y, vec3.z, w);
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
