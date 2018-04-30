"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager = /** @class */ (function () {
    function EventListenerManager() {
        this.listeners = new Map();
    }
    EventListenerManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new EventListenerManager();
        }
        return this.instance;
    };
    EventListenerManager.prototype.addListener = function (listener) {
        this.listeners.set(listener.eventType, listener);
    };
    EventListenerManager.prototype.removeListener = function (eventCode) {
        this.listeners.delete(eventCode);
    };
    EventListenerManager.prototype.notify = function (event) {
        var listener = this.listeners.get(event.eventType);
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    };
    return EventListenerManager;
}());
exports.EventListenerManager = EventListenerManager;
