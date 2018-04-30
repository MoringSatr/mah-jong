"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件抽象类
 */
var Event = /** @class */ (function () {
    function Event(eventType) {
        this.eventType = eventType;
    }
    Event.prototype.getEventCode = function () {
        return this.eventType;
    };
    Event.cast = function (event) {
        return event;
    };
    return Event;
}());
exports.Event = Event;
