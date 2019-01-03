var ezc = new EZCanvas();

var mat = new Matrix3();
mat.elements[0] = 2;
mat.elements[1] = 0;
mat.elements[2] = 3;
mat.elements[3] = 0;
mat.elements[4] = 2;
mat.elements[5] = 3;
mat.elements[6] = 0;
mat.elements[7] = 0;
mat.elements[8] = 1;

var vec = new Vector3();
vec.x = 3;
vec.y = 2;
vec.z = 1;

console.log(mat.dot(vec));
