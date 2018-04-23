"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventListener = /** @class */ (function () {
    function EventListener(eventType) {
        this._eventType = eventType;
    }
    Object.defineProperty(EventListener.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    return EventListener;
}());
exports.EventListener = EventListener;
