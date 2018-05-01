"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件监听器抽象类
 */
var EventListener = /** @class */ (function () {
    function EventListener(eventCode) {
        this.eventCode = eventCode;
    }
    EventListener.prototype.getEventCode = function () {
        return this.eventCode;
    };
    return EventListener;
}());
exports.EventListener = EventListener;
