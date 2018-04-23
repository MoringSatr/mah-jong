"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appliactionConfig = require("../../config/application.json");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.getInstance = function () {
        if (this._instance == null) {
            this._instance = new Config();
        }
        return this._instance;
    };
    Config.prototype.read = function (data) {
        cc.log("Config read data : ", data);
        cc.log("appliactionConfig : ", appliactionConfig);
    };
    return Config;
}());
exports.Config = Config;
