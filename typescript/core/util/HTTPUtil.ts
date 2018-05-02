export class HTTPUtil {

    public static get(url: string, handle: Function, params: object = null): any {
        return HTTPUtil.ajax(HttpMethod.GET, url, handle, params);
    }

    public static async post(url: string, handle: Function, params: object = null): Promise<any> {
        return new Promise<any>(resolve => resolve(HTTPUtil.ajax(HttpMethod.POST, url, handle, params)));
    }

    private static ajax(method: HttpMethod, url: string, handle: Function, data: object): any {
        // 创建ajax对象
        let xhr = new XMLHttpRequest();

        // 处理返回数据
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                handle(JSON.parse(xhr.responseText));
            }
        };

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
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.send(data == null ? "" : data);
        }

        return null;
    }

}

enum HttpMethod {
    POST,
    GET,
}

export interface HttpHandle {
    execute(data: any): void;
}
