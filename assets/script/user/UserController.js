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
var BaseController_1 = require("../core/controller/BaseController");
var EventListeners_1 = require("../core/common/event/listener/EventListeners");
var UserLoginCmd_1 = require("./cmd/UserLoginCmd");
var CmdHandles_1 = require("../core/common/protocol/CmdHandles");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super.call(this, new EventListeners_1.EventListeners("userListeners")) || this;
    }
    UserController.getInstence = function () {
        if (this.instance == null) {
            this.instance = new UserController();
        }
        return this.instance;
    };
    UserController.prototype.load = function () {
    };
    UserController.prototype.registEvent = function () {
    };
    UserController.prototype.registCmd = function () {
        CmdHandles_1.CmdHandles.getInstance().regist(new UserLoginCmd_1.UserLoginCmd());
    };
    return UserController;
}(BaseController_1.BaseController));
exports.UserController = UserController;
