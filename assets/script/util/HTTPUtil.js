"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTP_METHOD_GET = "GET";
var HTTP_METHOD_POST = "POST";
var TIME_OUT = 5000;
var READY_STATE;
(function (READY_STATE) {
    READY_STATE[READY_STATE["UNSENT"] = 0] = "UNSENT";
    READY_STATE[READY_STATE["OPENED"] = 1] = "OPENED";
    READY_STATE[READY_STATE["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    READY_STATE[READY_STATE["LOADING"] = 3] = "LOADING";
    READY_STATE[READY_STATE["DONE"] = 4] = "DONE";
})(READY_STATE || (READY_STATE = {}));
function join_params(params) {
    if (params == "" || params == null || params == "undifinde") {
        return encodeURIComponent("");
    }
    var query_str = "?";
    for (var key in params) {
        query_str + key.toString();
        query_str + "=";
        query_str + params[key].toString();
        query_str + "&";
    }
    query_str = query_str.substr(0, query_str.length - 1);
    return encodeURIComponent(query_str);
}
function status_is_ok(status) {
    return status >= 200 && status < 300;
}
var http_request = /** @class */ (function () {
    function http_request(url, method, params, timeout) {
        this.full_url = this.url = url;
        this.method = method;
        this.timeout = timeout || TIME_OUT;
        this.retry_times = 0;
        if (typeof (params) === "object") {
            this.params = join_params(params);
        }
        else {
            this.params = params;
        }
    }
    http_request.prototype.toString = function () {
        return "http_request:" + this.full_url + ",method=" + this.method + ",timeout=" + this.timeout;
    };
    http_request.prototype.exec = function () {
        var _xhr = this.xhr;
        var data = null;
        if (!_xhr) {
            this.xhr = _xhr = new XMLHttpRequest();
        }
        if (this.method == HTTP_METHOD_POST) {
            data = this.params;
        }
        else {
            this.full_url += this.params;
        }
        var self = this;
        _xhr.onreadystatechange = function () {
            if (_xhr.readyState === READY_STATE.DONE) {
                var status_1 = _xhr.status;
                if (!status_is_ok(status_1)) {
                    cc.warn(self.toString(), "resp error, status code=", status_1);
                    return;
                }
                cc.info(self.toString(), "resp success! status code=", status_1, ",responseType=", _xhr.responseType, ",response=", _xhr.responseText);
                return JSON.parse(_xhr.responseText); //{rescode, resmsg, respbody}
            }
        };
        _xhr.ontimeout = function () {
            cc.warn(self.toString(), "request ontimeout");
        };
        _xhr.onerror = function () {
            cc.error(self.toString(), "request onerror");
        };
        _xhr.onabort = function () {
            cc.warn(self.toString(), "request onabort");
        };
        _xhr.open(this.method, this.full_url, true);
        //setRequestHeader should be called after open
        if (cc.sys.isMobile) {
            _xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        if (this.method == HTTP_METHOD_POST) {
            _xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        _xhr.timeout = this.timeout || TIME_OUT;
        //event binding should before send
        _xhr.send(data);
        return JSON.parse(_xhr.responseText);
    };
    return http_request;
}());
//todo:http_request对象池重用，http_client监听http_request对象事件, 统计request数量, 统一的http_error_handler处理
var HTTPUtil = /** @class */ (function () {
    function HTTPUtil() {
    }
    HTTPUtil.getInstance = function () {
        if (this.instance == null) {
            this.instance = new HTTPUtil();
        }
        return this.instance;
    };
    HTTPUtil.prototype.spawn_request = function (url, method, params, timeout) {
        if (timeout === void 0) { timeout = TIME_OUT; }
        return new http_request(url, method, params, timeout);
    };
    HTTPUtil.prototype.request = function (url, params, method, timeout) {
        if (method === void 0) { method = HTTP_METHOD_GET; }
        if (timeout === void 0) { timeout = TIME_OUT; }
        var req = this.spawn_request(url, method, params, timeout);
        return req.exec();
    };
    HTTPUtil.get = function (url, params, timeout) {
        if (params === void 0) { params = ""; }
        if (timeout === void 0) { timeout = TIME_OUT; }
        return HTTPUtil.getInstance().request(url, params, HTTP_METHOD_GET, timeout);
    };
    HTTPUtil.post = function (url, params, timeout) {
        if (params === void 0) { params = ""; }
        if (timeout === void 0) { timeout = TIME_OUT; }
        return HTTPUtil.getInstance().request(url, params, HTTP_METHOD_POST, timeout);
    };
    return HTTPUtil;
}());
exports.HTTPUtil = HTTPUtil;
