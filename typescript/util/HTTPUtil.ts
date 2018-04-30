const HTTP_METHOD_GET: string = "GET";
const HTTP_METHOD_POST: string = "POST";
const TIME_OUT: number = 5000;

enum READY_STATE {
    UNSENT = 0,             //未打开,open()方法还未被调用.
    OPENED = 1,             //未发送,send()方法还未被调用.
    HEADERS_RECEIVED = 2,   //已获取响应头,send()方法已经被调用, 响应头和响应状态已经返回.
    LOADING = 3,            //正在下载响应体,响应体下载中; responseText中已经获取了部分数据.
    DONE = 4,               //请求完成,整个请求过程已经完毕.
}

function join_params(params: any): string {
    if (params == "" || params == null || params == "undifinde") {
        return encodeURIComponent("");
    }
    let query_str: string = "?";
    for (let key in params) {
        query_str + key.toString();
        query_str + "=";
        query_str + params[key].toString();
        query_str + "&";
    }
    query_str = query_str.substr(0, query_str.length - 1);
    return encodeURIComponent(query_str);
}

function status_is_ok(status: number): boolean {
    return status >= 200 && status < 300;
}

class http_request {
    url: string;
    full_url: string;
    method: string;
    params: any;
    timeout?: number;
    retry_times: number;
    xhr: XMLHttpRequest;

    constructor(url: string, method: string, params: any, timeout?: number) {
        this.full_url = this.url = url;
        this.method = method;
        this.timeout = timeout || TIME_OUT;
        this.retry_times = 0;
        if (typeof(params) === "object") {
            this.params = join_params(params);
        }
        else {
            this.params = params;
        }
    }

    public toString(): String {
        return "http_request:" + this.full_url + ",method=" + this.method + ",timeout=" + this.timeout;
    }

    public exec(): any {
        let _xhr: XMLHttpRequest = this.xhr;
        let data: any = null;
        if (!_xhr) {
            this.xhr = _xhr = new XMLHttpRequest();
        }
        if (this.method == HTTP_METHOD_POST) {
            data = this.params;
        } else {
            this.full_url += this.params;
        }

        let self: http_request = this;
        _xhr.onreadystatechange = function (): void {
            if (_xhr.readyState === READY_STATE.DONE) {
                let status: number = _xhr.status;
                if (!status_is_ok(status)) {
                    cc.warn(self.toString(), "resp error, status code=", status);
                    return;
                }
                cc.info(self.toString(), "resp success! status code=", status, ",responseType=", _xhr.responseType, ",response=", _xhr.responseText);
                return JSON.parse(_xhr.responseText);   //{rescode, resmsg, respbody}
            }
        };
        _xhr.ontimeout = function (): void {
            cc.warn(self.toString(), "request ontimeout");
        }
        _xhr.onerror = function (): void {
            cc.error(self.toString(), "request onerror")
        }
        _xhr.onabort = function (): void {
            cc.warn(self.toString(), "request onabort")
        }

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
    }
}


//todo:http_request对象池重用，http_client监听http_request对象事件, 统计request数量, 统一的http_error_handler处理
export class HTTPUtil {

    private static instance: HTTPUtil;

    private constructor() {
    }

    public static getInstance(): HTTPUtil {
        if (this.instance == null) {
            this.instance = new HTTPUtil();
        }
        return this.instance;
    }


    private spawn_request(url: string, method: string, params: any, timeout: number = TIME_OUT): http_request {
        return new http_request(url, method, params, timeout);
    }

    private request(url: string, params: any, method: string = HTTP_METHOD_GET, timeout: number = TIME_OUT): any {
        let req: http_request = this.spawn_request(url, method, params, timeout);
        return req.exec();
    }

    public static get(url: string, params: any = "", timeout: number = TIME_OUT): any {
        return HTTPUtil.getInstance().request(url, params, HTTP_METHOD_GET, timeout);
    }

    public static post(url: string, params: any = "", timeout: number = TIME_OUT): any {
        return HTTPUtil.getInstance().request(url, params, HTTP_METHOD_POST, timeout);
    }

}
