"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 长连接封装
 */
var SocketUtil = /** @class */ (function () {
    function SocketUtil() {
    }
    SocketUtil.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SocketUtil();
        }
        return this.instance;
    };
    return SocketUtil;
}());
exports.SocketUtil = SocketUtil;
