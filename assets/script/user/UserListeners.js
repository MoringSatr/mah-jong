"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListeners_1 = require("../core/common/event/listener/EventListeners");
var UserListeners = /** @class */ (function (_super) {
    __extends(UserListeners, _super);
    function UserListeners() {
        return _super.call(this, "userListeners") || this;
    }
    return UserListeners;
}(EventListeners_1.EventListeners));
exports.UserListeners = UserListeners;
