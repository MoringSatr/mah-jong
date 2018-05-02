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
    CmdHandles.prototype.handle = function (message) {
        if (message == null) {
            cc.error("CmdHandles handle message is null ");
            return;
        }
        var handle = this.cmdHandles.get(message.cmd);
        if (handle == null) {
            cc.error("CmdHandles handle not have handle by the cmd , cmd : ", message.cmd);
            return;
        }
        handle.handle(message);
    };
    return CmdHandles;
}());
exports.CmdHandles = CmdHandles;
