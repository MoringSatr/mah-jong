"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventNotifyer_1 = require("./EventNotifyer");
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
    EventListeners.prototype.load = function () {
        EventNotifyer_1.EventNotifyer.getInstance().regist(this);
        return this;
    };
    EventListeners.prototype.unload = function () {
        EventNotifyer_1.EventNotifyer.getInstance().unregist(this.name);
    };
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
