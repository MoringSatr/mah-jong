"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CmdHandle = /** @class */ (function () {
    function CmdHandle(cmd) {
        this.cmd = cmd;
    }
    CmdHandle.prototype.getCmd = function () {
        return this.cmd;
    };
    return CmdHandle;
}());
exports.CmdHandle = CmdHandle;
