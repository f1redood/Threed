import Vector2 from "https://f1redewd123.github.io/Threed/Vector2.js";
import Vector3 from "https://f1redewd123.github.io/Threed/Vector3.js";
import Vector4 from "https://f1redewd123.github.io/Threed/Vector4.js";

export default class RenderBuffer {
  #shaderProperties = {};
  
  constructor(s) {
    this.scene = s;
  }

  loadData(v, i, uv) {
    [this.verts, this.inds, this.uvs] = [v, i, uv];
  }

  loadShader(s) {
    this.shader = s;
  }

  setShaderProperty(key, value) {
    this.#shaderProperties[key] = value;
  }

  render() {
    const { ctx } = this.scene;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    
    // 1. Initialize a proper pixel buffer
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    /* VERTEX PARSING */
    var newVerts = [];
    for (var v = 0; v < this.verts.length; v++) {
      newVerts.push(this.shader.program.vert({ ...this.#shaderProperties, aPos: this.verts[v], position: Vector3.ZERO }).position);
    }

    /* FRAGMENT PARSING */
    for (var i = 0; i < this.inds.length; i += 3) {
      const v0 = newVerts[this.inds[i]];
      const v1 = newVerts[this.inds[i + 1]];
      const v2 = newVerts[this.inds[i + 2]];

      const uv0 = this.uvs[this.inds[i]];
      const uv1 = this.uvs[this.inds[i + 1]];
      const uv2 = this.uvs[this.inds[i + 2]];

      // Bounding box
      const minX = Math.max(0, Math.floor(Math.min(v0.x, v1.x, v2.x)));
      const maxX = Math.min(width, Math.ceil(Math.max(v0.x, v1.x, v2.x)));
      const minY = Math.max(0, Math.floor(Math.min(v0.y, v1.y, v2.y)));
      const maxY = Math.min(height, Math.ceil(Math.max(v0.y, v1.y, v2.y)));

      // Pre-calculate the area of the triangle (the denominator)
      // Using your #isInside logic: area is the edge function of v2 relative to edge v0-v1
      const area = this.#isInside(v0, v1, v2);

      for (var y = minY; y < maxY; y++) {
        for (var x = minX; x < maxX; x++) {
          const p = new Vector2(x, y);
          
          // Edge functions
          const w2 = this.#isInside(v0, v1, p) / area;
          const w0 = this.#isInside(v1, v2, p) / area;
          const w1 = this.#isInside(v2, v0, p) / area;

          // If weights are positive, point is inside
          if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
            const interpolatedUV = new Vector2(
              w0 * uv0.x + w1 * uv1.x + w2 * uv2.x,
              w0 * uv0.y + w1 * uv1.y + w2 * uv2.y
            );

            const res = this.shader.program.frag({
              ...this.#shaderProperties,
              fragColor: Vector4.ZERO,
              uv: interpolatedUV
            }).fragColor;

            // Map x, y to the 1D data array (RGBA)
            const pixelIdx = (y * width + x) * 4;
            data[pixelIdx] = res.x * 255;     // R
            data[pixelIdx + 1] = res.y * 255; // G
            data[pixelIdx + 2] = res.z * 255; // B
            data[pixelIdx + 3] = res.w * 255; // A
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  #getVec2LerpValues(x, y) {
    var vals = [];
    for (var x = Math.min(x.x, x.y); x < Math.max(x.x, x.y); x++) {
      for (var y = Math.min(x.y, y.y); y < Math.max(x.y, y.y); y++) {
        vals.push(new Vector2(x, y));
      }
    }
    return vals;
  }

  #isInside(l0, l1, p) {
    return ((p.x - l0.x) * (l1.y - l0.y) - (p.y - l0.y) * (l1.x - l0.x));
  }
}
