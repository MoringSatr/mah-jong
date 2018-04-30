"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 抽象 CMD 协议处理器
 */
var CmdHandles_1 = require("./CmdHandles");
var CmdHandle = /** @class */ (function () {
    function CmdHandle(cmd) {
        this.cmd = cmd;
        this.init();
    }
    CmdHandle.prototype.init = function () {
        CmdHandles_1.CmdHandles.getInstance().regist(this);
    };
    CmdHandle.prototype.getCmd = function () {
        return this.cmd;
    };
    return CmdHandle;
}());
exports.CmdHandle = CmdHandle;
