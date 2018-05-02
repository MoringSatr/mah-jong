"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 游戏逻辑控制器 每个模块拥有一个控制器。控制器为单利模式<br/>
 * 控制器用了来控制场景变换，场景中组件加载和卸载，组件变化。<br/>
 * 游戏具体逻辑处理在service中处理
 */
var BaseController = /** @class */ (function () {
    function BaseController(listeners) {
        this.listeners = listeners;
    }
    BaseController.prototype.start = function () {
        this.listeners.load();
        this.load();
    };
    BaseController.prototype.destory = function () {
        this.listeners.unload();
        this.unload();
    };
    return BaseController;
}());
exports.BaseController = BaseController;
