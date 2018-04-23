"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ByteBufferUtil = /** @class */ (function () {
    function ByteBufferUtil() {
    }
    ByteBufferUtil.uint8ArrayToArrayBuffer = function (uint8Array) {
        var arrayBuffer = new ArrayBuffer(uint8Array.byteLength);
        new Uint8Array(arrayBuffer).set(new Uint8Array(uint8Array).subarray(0, uint8Array.byteLength), 0);
        return arrayBuffer;
    };
    return ByteBufferUtil;
}());
exports.ByteBufferUtil = ByteBufferUtil;
