export class HTTPUtil {

    public static get(url: string, params: object = null): any {
        return HTTPUtil.ajax(HttpMethod.GET, url, params);
    }

    public static post(url: string, params: object): any {
        return HTTPUtil.ajax(HttpMethod.POST, url, params);
    }

    private static ajax(method: HttpMethod, url: string, data: object): any {
        // 创建ajax对象
        let xhr = new XMLHttpRequest();

        let params = "";
        if (data != null && typeof data == 'object') {
            for (let key in data) {
                params += key + '=' + data[key] + '&';
            }
            params = params.replace(/&$/, '');
        }

        if (method == HttpMethod.GET) {
            xhr.open('GET', url + '?' + params, true);
            xhr.send();
        } else if (method == HttpMethod.POST) {
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
        }

    }

}

enum HttpMethod {
    POST,
    GET,
}