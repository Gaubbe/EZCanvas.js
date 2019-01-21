var v0 = new Vector4(250, 0, 0, 1);
var v1 = new Vector4(0, 250, 0, 1);
var v2 = new Vector4(500, 500, 0, 1);

var r = new Renderer();
var b = new ImageBuffer(500, 500);

r.drawTriangle(v0, v1, v2, b);

var c = new Canvas(500, 500, "body");

c.ctx.putImageData(b.toImageData(), 0, 0);
