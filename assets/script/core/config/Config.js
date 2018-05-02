"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Config();
        }
        return this.instance;
    };
    Config.prototype.read = function (data) {
    };
    return Config;
}());
exports.Config = Config;
