# Threed
Threed is a JavaScript-based 3D graphics rendering pipeline based around the CanavsRenderingContext2D API. It contains several ECMAScript modules:
- Scene
- RenderBuffer
- Vector2
- Vector3
- Vector4
- Shader
- Texture
- Utils
## Scene
The main class all 3D logic runs on. Created with:
```js
new Scene(500, 500, element); // Width, height, parent(optional)
```
## RenderBuffer
Handles most of the rendering logic under the hood. Created with:
```js
var buff = new RenderBuffer(scene); // Parent scene
```
Methods include:
```js
buff.loadData(verts, inds, uvs);
buff.loadShader(shader);
buff.setShaderProperty(key, value);
buff.render();
```
## Vector2
A point in 2D space. Created with:
```js
var vec = new Vector2(x, y);
```
Methods include:
```js
vec.add(int);
vec.add(Vector2);
vec.sub(int);
vec.sub(Vector2);
vec.mul(int);
vec.mul(Vector2);
vec.div(int);
vec.div(Vector2);
```
## Vector3
A point in 3D space. Created with:
```js
new Vector3(x, y, z);
```
Methods include:
```js
vec.add(int);
vec.add(Vector3);
vec.sub(int);
vec.sub(Vector3);
vec.mul(int);
vec.mul(Vector3);
vec.div(int);
vec.div(Vector3);
```
## Vector4
A point in 4D space. Created with:
```js
new Vector4(x, y, z, w);
```
Methods include:
```js
vec.add(int);
vec.add(Vector4);
vec.sub(int);
vec.sub(Vector4);
vec.mul(int);
vec.mul(Vector4);
vec.div(int);
vec.div(Vector4);
```
## Shader
A shading program for a render buffer. Created with:
```js
new Shader(); // Constructorless
```
Methods include:
```js
createVertexShader(string);
createFragmentShader(string);
```
## Texture
A texture readable by shader programs. Available instantiation methods include:
```js
Texture.fromURL(url); // Async
```
## Utils
A helper class containing many useful methods for 3D graphics. Available method include:
```js
Utils.createPerspectiveProjectionMatrix(scene); // NOTICE: Extremely buggy. If you want to use a different matrix go ahead.
```
