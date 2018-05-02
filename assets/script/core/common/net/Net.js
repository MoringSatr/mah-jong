"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CmdHandles_1 = require("../protocol/CmdHandles");
var EventNotifyer_1 = require("../event/listener/EventNotifyer");
var ConnectEvent_1 = require("./event/ConnectEvent");
var DisconnectEvent_1 = require("./event/DisconnectEvent");
var Protocol_1 = require("../../lib/Protocol");
var Message = Protocol_1.coreProto.Message;
var ByteBufferUtil_1 = require("../../util/ByteBufferUtil");
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
        cc.info("net connect");
        this._isConnect = true;
        EventNotifyer_1.EventNotifyer.getInstance().notifyEvent(new ConnectEvent_1.ConnectEvent());
    };
    Net.prototype.disconnect = function (data) {
        cc.info("net disconnect");
        this._isConnect = false;
        EventNotifyer_1.EventNotifyer.getInstance().notifyEvent(new DisconnectEvent_1.DisconnectEvent());
    };
    Net.prototype.connect_failed = function (data) {
        cc.info("net connect_failed");
    };
    Net.prototype.error = function (data) {
        cc.info("net error");
    };
    Net.prototype.message = function (data) {
        var message = Message.decode(data);
        CmdHandles_1.CmdHandles.getInstance().handle(message);
    };
    Net.prototype.reconnect = function (data) {
        cc.info("net reconnect");
    };
    Net.prototype.reconnect_failed = function (data) {
        cc.info("net reconnect_failed");
    };
    Net.prototype.isConnect = function () {
        return this._isConnect;
    };
    Net.prototype.send = function (message) {
        var messageBuf = Message.encode(message).finish();
        var buffer = ByteBufferUtil_1.ByteBufferUtil.uint8ArrayToArrayBuffer(messageBuf);
        this.socket.emit("message", buffer);
    };
    return Net;
}());
exports.Net = Net;
