//Maths
class Vector3 {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
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