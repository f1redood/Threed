export default class Shader {
  program = {};
  createFragShader(frag) {
    this.program["frag"] = new Function("data", frag);
  }
}
