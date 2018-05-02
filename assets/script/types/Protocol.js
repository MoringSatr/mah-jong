"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Namespace coreProto. */
var coreProto;
(function (coreProto) {
    /** 通讯消息 */
    var Message = /** @class */ (function () {
        function Message() {
        }
        return Message;
    }());
    /** 基础数据类型 - int */
    var IntMsg = /** @class */ (function () {
        function IntMsg() {
        }
        return IntMsg;
    }());
    /** 基础数据类型 - long */
    var LongMsg = /** @class */ (function () {
        function LongMsg() {
        }
        return LongMsg;
    }());
    /** 基础数据类型 - double */
    var DoubleMsg = /** @class */ (function () {
        function DoubleMsg() {
        }
        return DoubleMsg;
    }());
    /** 基础数据类型 - float */
    var FloatMsg = /** @class */ (function () {
        function FloatMsg() {
        }
        return FloatMsg;
    }());
    /** 基础数据类型 - string */
    var StringMsg = /** @class */ (function () {
        function StringMsg() {
        }
        return StringMsg;
    }());
    /** 基础数据类型 - boolean */
    var BooleanMsg = /** @class */ (function () {
        function BooleanMsg() {
        }
        return BooleanMsg;
    }());
    /** 基础数据类型 - int list */
    var IntsMsg = /** @class */ (function () {
        function IntsMsg() {
        }
        return IntsMsg;
    }());
    /** 基础数据类型 - long list */
    var LongsMsg = /** @class */ (function () {
        function LongsMsg() {
        }
        return LongsMsg;
    }());
    /** 基础数据类型 - string list */
    var StringsMsg = /** @class */ (function () {
        function StringsMsg() {
        }
        return StringsMsg;
    }());
    /** 基础数据类型 - double list */
    var DoublesMsg = /** @class */ (function () {
        function DoublesMsg() {
        }
        return DoublesMsg;
    }());
    /** 基础数据类型 - float list */
    var FloatsMsg = /** @class */ (function () {
        function FloatsMsg() {
        }
        return FloatsMsg;
    }());
    /** 基础数据类型 - int int map */
    var IntIntMapMsg = /** @class */ (function () {
        function IntIntMapMsg() {
        }
        return IntIntMapMsg;
    }());
    /** 基础数据类型 - int long map */
    var IntLongMapMsg = /** @class */ (function () {
        function IntLongMapMsg() {
        }
        return IntLongMapMsg;
    }());
    /** 基础数据类型 - int string map */
    var IntStringMapMsg = /** @class */ (function () {
        function IntStringMapMsg() {
        }
        return IntStringMapMsg;
    }());
    /** 基础数据类型 - long long map */
    var LongLongMapMsg = /** @class */ (function () {
        function LongLongMapMsg() {
        }
        return LongLongMapMsg;
    }());
    /** 基础数据类型 - long int map */
    var LongIntMapMsg = /** @class */ (function () {
        function LongIntMapMsg() {
        }
        return LongIntMapMsg;
    }());
    /** 基础数据类型 - long string map */
    var LongStringMapMsg = /** @class */ (function () {
        function LongStringMapMsg() {
        }
        return LongStringMapMsg;
    }());
})(coreProto = exports.coreProto || (exports.coreProto = {}));
/** Namespace gameProto. */
var gameProto;
(function (gameProto) {
    /** 游戏类型 */
    var GameType;
    (function (GameType) {
        GameType[GameType["TUI_TONG_ZI"] = 0] = "TUI_TONG_ZI";
        GameType[GameType["KA_WU_XING"] = 1] = "KA_WU_XING";
        GameType[GameType["XUE_LIU_CHENG_HE"] = 2] = "XUE_LIU_CHENG_HE";
        GameType[GameType["XUE_ZHAN_DAO_DI"] = 3] = "XUE_ZHAN_DAO_DI";
    })(GameType || (GameType = {}));
})(gameProto = exports.gameProto || (exports.gameProto = {}));
/** Namespace playerProto. */
var playerProto;
(function (playerProto) {
    /** 玩家状态信息 */
    var PlayerState;
    (function (PlayerState) {
        PlayerState[PlayerState["ONLINE"] = 0] = "ONLINE";
        PlayerState[PlayerState["OFFLINE"] = 1] = "OFFLINE";
        PlayerState[PlayerState["IN_GAME"] = 2] = "IN_GAME";
    })(PlayerState || (PlayerState = {}));
    /** 基础玩家信息 */
    var SimplePlayerMsg = /** @class */ (function () {
        function SimplePlayerMsg() {
        }
        return SimplePlayerMsg;
    }());
    /** 玩家信息 */
    var PlayerMsg = /** @class */ (function () {
        function PlayerMsg() {
        }
        return PlayerMsg;
    }());
})(playerProto = exports.playerProto || (exports.playerProto = {}));
/** Namespace roomProto. */
var roomProto;
(function (roomProto) {
    /** 房间消息 */
    var RoomMsg = /** @class */ (function () {
        function RoomMsg() {
        }
        return RoomMsg;
    }());
    /** 房间中玩家信息 */
    var RoomPlayer = /** @class */ (function () {
        function RoomPlayer() {
        }
        return RoomPlayer;
    }());
})(roomProto = exports.roomProto || (exports.roomProto = {}));
/** Namespace settingsProto. */
var settingsProto;
(function (settingsProto) {
    /** 用户设置信息 */
    var SettingsMsg = /** @class */ (function () {
        function SettingsMsg() {
        }
        return SettingsMsg;
    }());
})(settingsProto = exports.settingsProto || (exports.settingsProto = {}));
/** Namespace userProto. */
var userProto;
(function (userProto) {
    /** 用户信息 */
    var UserMsg = /** @class */ (function () {
        function UserMsg() {
        }
        return UserMsg;
    }());
    /** Gender enum. */
    var Gender;
    (function (Gender) {
        Gender[Gender["FEMALE"] = 0] = "FEMALE";
        Gender[Gender["MALE"] = 1] = "MALE";
        Gender[Gender["UNKNOW"] = 3] = "UNKNOW";
    })(Gender || (Gender = {}));
})(userProto = exports.userProto || (exports.userProto = {}));
