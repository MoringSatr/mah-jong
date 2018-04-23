"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appliactionConfig = require("../../config/application.json");
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
        cc.log("Config read data : ", data);
        cc.log("appliactionConfig : ", appliactionConfig);
    };
    return Config;
}());
exports.Config = Config;
