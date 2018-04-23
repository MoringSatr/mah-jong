"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(eventType) {
        this._eventType = eventType;
    }
    Object.defineProperty(Event.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    Event.cast = function (event) {
        return event;
    };
    return Event;
}());
exports.Event = Event;
