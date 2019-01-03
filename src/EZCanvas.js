//Maths
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

class Vector3 {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    copy(v) {
        this.setValue(v.x, v.y, v.z)
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
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    copy(v) {
        this.setValue(v.x, v.y)
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

class EZCanvas {
    constructor() {
        //TODO: Initialize stuff
        console.log("EZCanvas succesfully loaded!");
    }
}