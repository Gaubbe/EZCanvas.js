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
        console.log("EZCanvas succesfully loaded!");

        var signal = new Signal("print_signal");

        var listener = new SignalListener();
        listener.connect(signal, function (parameters) { console.log(parameters[0]) });
        signal.send(["print_signal: Signal received!"]);
        signal.send(["print_signal: Signal received! 2"]);
    }
}