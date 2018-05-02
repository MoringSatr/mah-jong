"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPUtil = /** @class */ (function () {
    function HTTPUtil() {
    }
    HTTPUtil.get = function (url, handle, params) {
        if (params === void 0) { params = null; }
        return HTTPUtil.ajax(HttpMethod.GET, url, handle, params);
    };
    HTTPUtil.post = function (url, handle, params) {
        if (params === void 0) { params = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return resolve(HTTPUtil.ajax(HttpMethod.POST, url, handle, params)); })];
            });
        });
    };
    HTTPUtil.ajax = function (method, url, handle, data) {
        // 创建ajax对象
        var xhr = new XMLHttpRequest();
        // 处理返回数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                handle(JSON.parse(xhr.responseText));
            }
        };
        var params = "";
        if (data != null && typeof data == 'object') {
            for (var key in data) {
                params += key + '=' + data[key] + '&';
            }
            params = params.replace(/&$/, '');
        }
        if (method == HttpMethod.GET) {
            xhr.open('GET', url + '?' + params, true);
            xhr.send();
        }
        else if (method == HttpMethod.POST) {
            xhr.open('POST', url, true);
            // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.send(data == null ? "" : data);
        }
        return null;
    };
    return HTTPUtil;
}());
exports.HTTPUtil = HTTPUtil;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["POST"] = 0] = "POST";
    HttpMethod[HttpMethod["GET"] = 1] = "GET";
})(HttpMethod || (HttpMethod = {}));
