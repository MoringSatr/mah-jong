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
var Event_1 = require("../../core/common/event/Event");
var EventCode_1 = require("../../core/common/event/EventCode");
var TestEvent = /** @class */ (function (_super) {
    __extends(TestEvent, _super);
    function TestEvent(name, age) {
        var _this = _super.call(this, EventCode_1.EventCode.TEST) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return TestEvent;
}(Event_1.Event));
exports.TestEvent = TestEvent;
