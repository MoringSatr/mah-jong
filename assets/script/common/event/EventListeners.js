"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventListeners = /** @class */ (function () {
    function EventListeners() {
        this.listeners = new Map();
    }
    EventListeners.getInstance = function () {
        if (this.instance == null) {
            this.instance = new EventListeners();
        }
        return this.instance;
    };
    EventListeners.prototype.addListener = function (listener) {
        this.listeners.set(listener.eventType, listener);
    };
    EventListeners.prototype.removeListener = function (eventCode) {
        this.listeners.delete(eventCode);
    };
    EventListeners.prototype.notify = function (event) {
        var listener = this.listeners.get(event.eventType);
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;
