"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = require("../../common/event/EventListener");
var EventCode_1 = require("../../common/event/EventCode");
var Event_1 = require("../../common/event/Event");
var TestListener = /** @class */ (function (_super) {
    __extends(TestListener, _super);
    function TestListener() {
        return _super.call(this, EventCode_1.EventCode.event_1) || this;
    }
    TestListener.prototype.onEvent = function (event) {
        var testEvent = Event_1.Event.cast(event);
        cc.log("testEvent : ", JSON.stringify(testEvent));
    };
    return TestListener;
}(EventListener_1.EventListener));
exports.TestListener = TestListener;
