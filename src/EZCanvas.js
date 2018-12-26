class Signal {
    constructor(name, parameters) {
        this.name = name;
        this.parameters = parameters;
    }

    send() {
        var numListeners = SignalListener.listeners.length;
        for (var i = 0; i < numListeners; i++) {
            SignalListener.listeners[i].receive(this);
        }
    }
}

class SignalListener {
    constructor() {
        this.signalNames = [];
        this.callbacks = [];
        SignalListener.listeners.push(this);
    }

    connect(signalName, callback) {
        if (this.signalNames.find(function (element) { return element == signalName; }) == undefined) {
            this.signalNames.push(signalName);
            this.callbacks.push(callback);   
        }
    }

    receive(signal) {
        if (signal instanceof Signal) {
            var index = this.signalNames.findIndex(function (element) { return element == signal.name; })
            if (index != undefined) {
                this.callbacks[index](signal.parameters);
            }
        }
    }
}

SignalListener.listeners = [];

class EZCanvas {
    constructor() {
        console.log("EZCanvas succesfully loaded!");

        var signal = new Signal("test_signal", ["hey!"]);
        var signal2 = new Signal("test_signal2", ["hey!2"]);

        var listener = new SignalListener();
        listener.connect("test_signal", function (parameters) { console.log(parameters[0]) });
        listener.connect("test_signal2", function (parameters) { console.log(parameters[0]) });
        signal2.send();
    }
}