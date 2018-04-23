"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPUtil = /** @class */ (function () {
    function HTTPUtil() {
    }
    HTTPUtil.get = function (url, params) {
        if (params === void 0) { params = null; }
        return HTTPUtil.ajax(HttpMethod.GET, url, params);
    };
    HTTPUtil.post = function (url, params) {
        return HTTPUtil.ajax(HttpMethod.POST, url, params);
    };
    HTTPUtil.ajax = function (method, url, data) {
        // 创建ajax对象
        var xhr = new XMLHttpRequest();
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
            xhr.send(data);
        }
        // 处理返回数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    return JSON.parse(xhr.responseText);
                }
                return null;
            }
        };
    };
    return HTTPUtil;
}());
exports.HTTPUtil = HTTPUtil;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["POST"] = 0] = "POST";
    HttpMethod[HttpMethod["GET"] = 1] = "GET";
})(HttpMethod || (HttpMethod = {}));