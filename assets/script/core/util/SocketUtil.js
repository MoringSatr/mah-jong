"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Net_1 = require("../common/net/Net");
var Constant_1 = require("../common/Constant");
/**
 * 长连接封装
 */
var SocketUtil = /** @class */ (function () {
    function SocketUtil() {
        this.net = new Net_1.Net(Constant_1.Constant.SOCKET_URL);
    }
    SocketUtil.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SocketUtil();
        }
        return this.instance;
    };
    SocketUtil.prototype.send = function (message) {
        this.net.send(message);
    };
    return SocketUtil;
}());
exports.SocketUtil = SocketUtil;
