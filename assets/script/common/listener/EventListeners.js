"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @author: liubowen
 * @date:
 * @description: 事件监听器集合，改集合中的监听的事件类型是唯一的
 */
var EventListeners = /** @class */ (function () {
    function EventListeners(name) {
        this.name = name;
        this.listeners = new Map();
    }
    EventListeners.prototype.getName = function () {
        return this.name;
    };
    EventListeners.prototype.regist = function (listener) {
        this.listeners.set(listener.getEventCode(), listener);
    };
    EventListeners.prototype.unregist = function (eventCode) {
        this.listeners.delete(eventCode);
    };
    EventListeners.prototype.notifyEvent = function (event) {
        var listener = this.listeners.get(event.getEventCode());
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;
