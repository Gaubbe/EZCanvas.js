//Utility Functions 
function swapVariables(a, b) {
    var temp = a;
    a = b;
    b = temp;
}

function lerp(a, b, t) {
    return ((1 - t) * a) + (b * t);
}

//Maths
class Matrix4 {
    constructor() {
        this.elements = [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        ];
    }

    diagonal(num) {
        for (var i = 0; i < 16; i++) {
            if (i % 5 == 0) {
                this.elements[i] = num;
            } else {
                this.elements[i] = 0;
            }
        }
    }

    identity() {
        this.diagonal(1);
    }

    add(m) {
        if (m instanceof Matrix4) {
            for (var i = 0; i < 16; i++) {
                this.elements[i] += m.elements[i];
            }
        }
    }

    subtract(m) {
        if (m instanceof Matrix4) {
            for (var i = 0; i < 16; i++) {
                this.elements[i] -= m.elements[i];
            }
        }
    }

    multiply(m) {
        if (m instanceof Matrix4) {
            for (var i = 0; i < 16; i++) {
                this.elements[i] *= m.elements[i];
            }
        }
    }

    divide(m) {
        if (m instanceof Matrix4) {
            for (var i = 0; i < 16; i++) {
                this.elements[i] /= m.elements[i];
            }
        }
    }

    dot(other) {
        //Matrix-Matrix multiplication
        if (other instanceof Matrix4) {
            var newElements = [];
            for (var y = 0; y < 4; y++) {
                for (var x = 0; x < 4; x++) {
                    var sum = 0;
                    for (var e = 0; e < 4; e++) {
                        sum += this.elements[e + y * 3] * other.elements[x + e * 3];
                    }
                    newElements[x + y * 3] = sum;
                }
            }
            this.elements = newElements;
        }

        //Matrix-Vector multiplication
        if (other instanceof Vector4) {
            var result = new Vector4();
            result.x =
                this.elements[0] * other.x +
                this.elements[1] * other.y +
                this.elements[2] * other.z +
                this.elements[3] * other.w;

            result.y =
                this.elements[4] * other.x +
                this.elements[5] * other.y +
                this.elements[6] * other.z +
                this.elements[7] * other.w;

            result.z =
                this.elements[8] * other.x +
                this.elements[9] * other.y +
                this.elements[10] * other.z +
                this.elements[11] * other.w;

            result.w =
                this.elements[12] * other.x +
                this.elements[13] * other.y +
                this.elements[14] * other.z +
                this.elements[15] * other.w;

            return result;
        }
    }
}

class Matrix3 {
    constructor() {
        this.elements = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
    }

    diagonal(num) {
        for (var i = 0; i < 9; i++) {
            if (i % 4 == 0) {
                this.elements[i] = num;
            } else {
                this.elements[i] = 0;
            }
        }
    }

    identity() {
        this.diagonal(1);
    }

    add(m) {
        if (m instanceof Matrix3) {
            for (var i = 0; i < 9; i++) {
                this.elements[i] += m.elements[i];
            }
        }
    }

    subtract(m) {
        if (m instanceof Matrix3) {
            for (var i = 0; i < 9; i++) {
                this.elements[i] -= m.elements[i];
            }
        }
    }

    multiply(m) {
        if (m instanceof Matrix3) {
            for (var i = 0; i < 9; i++) {
                this.elements[i] *= m.elements[i];
            }
        }
    }

    divide(m) {
        if (m instanceof Matrix3) {
            for (var i = 0; i < 9; i++) {
                this.elements[i] /= m.elements[i];
            }
        }
    }

    dot(other) {
        //Matrix-Matrix multiplication
        if (other instanceof Matrix3) {
            var newElements = [];
            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 3; x++) {
                    var sum = 0;
                    for (var e = 0; e < 3; e++) {
                        sum += this.elements[e + y * 3] * other.elements[x + e * 3];
                    }
                    newElements[x + y * 3] = sum;
                }
            }
            this.elements = newElements;
        }

        //Matrix-Vector multiplication
        if (other instanceof Vector3) {
            var result = new Vector3();
            result.x =
                this.elements[0] * other.x +
                this.elements[1] * other.y +
                this.elements[2] * other.z;

            result.y =
                this.elements[3] * other.x +
                this.elements[4] * other.y +
                this.elements[5] * other.z;

            result.z =
                this.elements[6] * other.x +
                this.elements[7] * other.y +
                this.elements[8] * other.z;

            return result;
        }
    }
}

class Vector4 {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    copy(v) {
        if (v instanceof Vector4) {
            this.setValue(v.x, v.y, v.z, v.w);
        }
    }

    setValue(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    add(v) {
        if (v instanceof Vector4) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
            this.w += v.w;
        }
    }

    subtract(v) {
        if (v instanceof Vector4) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
            this.w -= v.w;
        }
    }

    multiply(v) {
        if (v instanceof Vector4) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
            this.w *= v.w;
        }
    }

    divide(v) {
        if (v instanceof Vector4) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
            this.w /= v.w;
        }
    }

    dot(v) {
        if (v instanceof Vector4) {
            return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w);
        }
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    normalize() {
        var mag = this.magnitude();
        this.x = this.x / mag;
        this.y = this.y / mag;
        this.z = this.z / mag;
        this.w = this.w / mag;
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    copy(v) {
        if (v instanceof Vector3) {
            this.setValue(v.x, v.y, v.z);
        }
    }

    setValue(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        if (v instanceof Vector3) {
            this.x += v.x;
            this.y += v.y;
            this.z += v.z;
        }
    }

    subtract(v) {
        if (v instanceof Vector3) {
            this.x -= v.x;
            this.y -= v.y;
            this.z -= v.z;
        }
    }

    multiply(v) {
        if (v instanceof Vector3) {
            this.x *= v.x;
            this.y *= v.y;
            this.z *= v.z;
        }
    }

    divide(v) {
        if (v instanceof Vector3) {
            this.x /= v.x;
            this.y /= v.y;
            this.z /= v.z;
        }
    }

    dot(v) {
        if (v instanceof Vector3) {
            return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
        }
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        var mag = this.magnitude();
        this.x = this.x / mag;
        this.y = this.y / mag;
        this.z = this.z / mag;
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    copy(v) {
        if (v instanceof Vector2) {
            this.setValue(v.x, v.y);
        }
    }

    setValue(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        if (v instanceof Vector2) {
            this.x += v.x;
            this.y += v.y;
        }
    }

    subtract(v) {
        if (v instanceof Vector2) {
            this.x -= v.x;
            this.y -= v.y;
        }
    }

    multiply(v) {
        if (v instanceof Vector2) {
            this.x *= v.x;
            this.y *= v.y;
        }
    }

    divide(v) {
        if (v instanceof Vector2) {
            this.x /= v.x;
            this.y /= v.y;
        }
    }

    dot(v) {
        if (v instanceof Vector2) {
            return (this.x * v.x) + (this.y * v.y);
        }
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        var mag = this.magnitude();
        this.x = this.x / mag;
        this.y = this.y / mag;
    }
}

//Messaging
class Signal {
    constructor(name) {
        this.name = name;
        this.listeners = [];
    }

    send(parameters) {
        var numListeners = this.listeners.length;
        for (var i = 0; i < numListeners; i++) {
            this.listeners[i].receive(this, parameters);
        }
    }
}

class SignalListener {
    constructor() {
        this.signals = [];
        this.callbacks = [];
    }

    connect(signal, callback) {
        if (this.signals.find(function (element) { return element == signal; }) == undefined) {
            this.signals.push(signal);
            this.callbacks.push(callback);
            signal.listeners.push(this);
        }
    }

    receive(signal, parameters) {
        if (signal instanceof Signal) {
            var index = this.signals.findIndex(function (element) { return element == signal; })
            if (index != undefined) {
                this.callbacks[index](parameters);
            }
        }
    }
}

//Graphics
class Mesh {
    constructor() {
        this.vertices = null; //Vector4 array
        this.indices = null;
    }

    setVertices(vertices) {
        this.vertices = vertices;
    }
    
    setIndices(indices) {
        this.indices = indices;
    }
}

class ImageBuffer {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.buffer = new Uint8ClampedArray(width * heigth * 4);

        for(var i = 0; i < width * heigth; i++){
            this.setPixel(i, 0, new Vector4(0, 0, 0, 255))
        }
    }

    setPixel(x, y, color) {
        if (color instanceof Vector4) {
            this.buffer[(x * 4 + 0) + y * (this.width * 4)] = color.x;
            this.buffer[(x * 4 + 1) + y * (this.width * 4)] = color.y;
            this.buffer[(x * 4 + 2) + y * (this.width * 4)] = color.z;
            this.buffer[(x * 4 + 3) + y * (this.width * 4)] = color.w;
        }
    }

    toImageData() {
        return new ImageData(this.buffer, this.width, this.heigth);
    }
}

class Renderer {
    constructor() {

    }

    //This function is just a test for rasterization. Most of it is temporary
    render(mesh, buffer) {
        if (mesh instanceof Mesh && buffer instanceof ImageBuffer) {
            for (var i = 0; i < mesh.indices.length / 3 /*Every triangle*/; i++) {
                this.drawTriangle(
                    mesh.vertices[mesh.indices[i + 0]],
                    mesh.vertices[mesh.indices[i + 1]],
                    mesh.vertices[mesh.indices[i + 2]],
                    buffer
                    );
            }
        }
    }

    drawTriangle(v0, v1, v2, buffer) {
        //Sorting vertices by y
        //v0: top most point
        //v1: 2nd top most point
        //v2: Bottom most point
        if (v1.y < v0.y) swapVariables(v1, v0);
        if (v2.y < v1.y) swapVariables(v2, v1);
        if (v1.y < v0.y) swapVariables(v1, v0);

        if (v0.y == v1.y) {         /*Flat top triangle*/
            //Sorting vertices by expected input
            if (v1.x < v0.x) swapVariables(v1, v0);
            this.drawFlatTopTriangle(v0, v1, v2, buffer);
        } else if (v1.y == v2.y) {   /*Flat bottom triangle*/
            //Sorting vertices by expected input
            if (v2.x < v1.x) swapVariables(v2, v1);
            this.drawFlatTopTriangle(v0, v1, v2, buffer);
        } else {                    /*General triangle*/
            var t = (v1.y - v0.y) / (v2.y - v0.y);
            var vi = new Vector4();     //TODO: Make this not a Vector4
            vi.setValue(lerp(v0.x, v2.x, t), lerp(v0.y, v2.y, t), 0, 0);

            if (v1.x < vi.x) {          /*Major left triangle*/
                this.drawFlatTopTriangle(v1, vi, v2, buffer);
                this.drawFlatBottomTriangle(v0, v1, vi, buffer);
            } else {                    /*Major right triangle*/
                this.drawFlatTopTriangle(vi, v1, v2, buffer);
                this.drawFlatBottomTriangle(v0, vi, v1, buffer);
            }
        }
    }

    //v0: top left
    //v1: top right
    //v2: bottom
    drawFlatTopTriangle(v0, v1, v2, buffer) {
        var m0 = (v2.x - v0.x) / (v2.y - v0.y);
        var m1 = (v2.x - v1.x) / (v2.y - v1.y);

        var yStart = Math.ceil(v0.y - 0.5);
        var yEnd = Math.ceil(v2.y - 0.5);
        for (var y = yStart; y < yEnd; y++) {
            var px0 = m0 * (y + 0.5 - v0.y) + v0.x;
            var px1 = m1 * (y + 0.5 - v1.y) + v1.x;

            var xStart = Math.ceil(px0 - 0.5);
            var xEnd = Math.ceil(px1 - 0.5);

            for (var x = xStart; x < xEnd; x++) {
                var color = new Vector4(255, 255, 255, 255);
                buffer.setPixel(x, y, color);
            }
        }
    }

    //v0: top
    //v1: bottom left
    //v2: bottom right
    drawFlatBottomTriangle(v0, v1, v2, buffer) {
        var m0 = (v1.x - v0.x) / (v1.y - v0.y);
        var m1 = (v2.x - v0.x) / (v2.y - v0.y);

        var yStart = Math.ceil(v0.y - 0.5);
        var yEnd = Math.ceil(v2.y - 0.5);
        for (var y = yStart; y < yEnd; y++) {
            var px0 = m0 * (y + 0.5 - v1.y) + v1.x;
            var px1 = m1 * (y + 0.5 - v2.y) + v2.x;

            var xStart = Math.ceil(px0 - 0.5);
            var xEnd = Math.ceil(px1 - 0.5);

            for (var x = xStart; x < xEnd; x++) {
                var color = new Vector4(255, 255, 255, 255);
                buffer.setPixel(x, y, color);
            }
        }
    }
}

class Canvas {
    constructor(width, height, parentId) {
        this.width = width;
        this.height = height;

        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        this.ctx = canvas.getContext('2d');
        document.getElementById(parentId).appendChild(canvas);
    }
}