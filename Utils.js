import Vector3 from "https://f1redewd123.github.io/Threed/Vector3.js";
import Vector4 from "https://f1redewd123.github.io/Threed/Vector4.js";

export default class Utils {
  static createPerspectiveProjectionMatrix(scene) {
    var aspect = scene.canvas.width / scene.canvas.height;
    var far = 100;
    var near = 0.001;
    
    return new Vector4(
      new Vector4(1 / aspect * Math.tan(far / 2), 0, 0, 0),
      new Vector4(0, 1 / Math.tan(far / 2), 0, 0),
      new Vector4(0, 0, (f + n) / (n - f), -1),
      new Vector4(0, 0, (f * n * 2) / (n - f), 0)
    );
  }
}
