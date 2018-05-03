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
var CmdHandle_1 = require("../../core/common/protocol/CmdHandle");
var Protocol_1 = require("../../core/lib/Protocol");
var StringMsg = Protocol_1.coreProto.StringMsg;
var UserLoginCmd = /** @class */ (function (_super) {
    __extends(UserLoginCmd, _super);
    function UserLoginCmd() {
        return _super.call(this, 20001) || this;
    }
    UserLoginCmd.prototype.handle = function (message) {
        var userName = StringMsg.decode(message.body);
        cc.info("server send message for user login , message:{}, userName :{}", message.toJSON(), userName);
    };
    return UserLoginCmd;
}(CmdHandle_1.CmdHandle));
exports.UserLoginCmd = UserLoginCmd;
