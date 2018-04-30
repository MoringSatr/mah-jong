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
var EventListenerManager_1 = require("../common/event/listener/EventListenerManager");
var TestListener_1 = require("./listener/TestListener");
var Config_1 = require("../config/Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var listeners = EventListenerManager_1.EventListenerManager.getInstance();
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
        cc.loader.loadRes("config/application.json");
        var testEvent = new TestEvent_1.TestEvent("liubowen", 24);
        listeners.addListener(new TestListener_1.TestListener());
        listeners.notify(testEvent);
        Config_1.Config.getInstance().read(null);
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
