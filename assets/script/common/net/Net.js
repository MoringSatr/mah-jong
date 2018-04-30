"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 长连接通讯(socket.io)
 */
var Net = /** @class */ (function () {
    function Net(url) {
        this.socket = io.connect(url);
        this.init();
    }
    Net.prototype.init = function () {
        this.socket.on("connect", this.connect);
        this.socket.on("disconnect", this.disconnect);
        this.socket.on("connect_failed", this.connect_failed);
        this.socket.on("error", this.error);
        this.socket.on("message", this.message);
        this.socket.on("reconnect", this.reconnect);
        this.socket.on("reconnect_failed", this.reconnect_failed);
    };
    Net.prototype.connect = function (data) {
        this.isConnect = true;
    };
    Net.prototype.disconnect = function (data) {
        this.isConnect = false;
    };
    Net.prototype.connect_failed = function (data) {
    };
    Net.prototype.error = function (data) {
    };
    Net.prototype.message = function (data) {
    };
    Net.prototype.reconnect = function (data) {
    };
    Net.prototype.reconnect_failed = function (data) {
    };
    return Net;
}());
exports.Net = Net;
