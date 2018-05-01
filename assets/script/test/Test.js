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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TestEvent_1 = require("./event/TestEvent");
var TestListener_1 = require("./listener/TestListener");
var TestEventListeners_1 = require("./listener/TestEventListeners");
var EventNotifyer_1 = require("../core/common/event/listener/EventNotifyer");
var SocketUtil_1 = require("../core/util/SocketUtil");
var TestConnectListener_1 = require("./listener/TestConnectListener");
var HTTPUtil_1 = require("../core/util/HTTPUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'hello';
        return _this;
    }
    Test.prototype.start = function () {
        this.text = "liu bowen";
        this.label.string = this.text;
        this.listeners = new TestEventListeners_1.TestEventListeners().load();
        this.listeners.regist(new TestListener_1.TestListener());
        this.listeners.regist(new TestConnectListener_1.TestConnectListener());
        var testEvent = new TestEvent_1.TestEvent("liubowen", 24);
        EventNotifyer_1.EventNotifyer.getInstance().notifyEvent(testEvent);
        SocketUtil_1.SocketUtil.getInstance().send("assad");
        HTTPUtil_1.HTTPUtil.post("http://localhost:9099/test/hollo", function (data) {
            cc.info("wwww", data);
        });
    };
    Test.prototype.onDestroy = function () {
        this.listeners.unload();
        _super.prototype.onDestroy.call(this);
    };
    __decorate([
        property(cc.Label)
    ], Test.prototype, "label", void 0);
    __decorate([
        property
    ], Test.prototype, "text", void 0);
    Test = __decorate([
        ccclass
    ], Test);
    return Test;
}(cc.Component));
exports.Test = Test;
