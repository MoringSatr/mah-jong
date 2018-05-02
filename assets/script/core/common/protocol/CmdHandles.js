"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CmdHandles = /** @class */ (function () {
    function CmdHandles() {
        this.cmdHandles = new Map();
    }
    CmdHandles.getInstance = function () {
        if (this.instance == null) {
            this.instance = new CmdHandles();
        }
        return this.instance;
    };
    CmdHandles.prototype.regist = function (cmdHandle) {
        this.cmdHandles.set(cmdHandle.getCmd(), cmdHandle);
    };
    CmdHandles.prototype.handle = function (cmd, data) {
        var handle = this.cmdHandles.get(cmd);
        if (handle == null) {
            cc.error("not have handle the cmd , cmd : ", cmd);
            return;
        }
        handle.handle(data);
    };
    return CmdHandles;
}());
exports.CmdHandles = CmdHandles;
