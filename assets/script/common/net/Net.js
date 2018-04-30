"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 长连接通讯(socket.io)
 */
var Net = /** @class */ (function () {
    function Net(url) {
        this.socketIO = io.connect(url);
    }
    return Net;
}());
exports.Net = Net;
