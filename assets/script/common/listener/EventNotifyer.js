"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件发射器
 */
var EventNotifyer = /** @class */ (function () {
    function EventNotifyer() {
        this.listeners = new Map();
    }
    EventNotifyer.prototype.regist = function (listeners) {
        this.listeners.set(listeners.getName(), listeners);
    };
    EventNotifyer.prototype.unregist = function (listenersName) {
        this.listeners.delete(listenersName);
    };
    EventNotifyer.prototype.notifyEvent = function (event) {
        this.listeners.forEach(function (value) { return value.notifyEvent(event); });
    };
    return EventNotifyer;
}());
exports.EventNotifyer = EventNotifyer;
