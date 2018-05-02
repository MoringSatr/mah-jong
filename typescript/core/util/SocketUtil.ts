import {Net} from "../common/net/Net";
import {Constant} from "../common/Constant";

/**
 * 长连接封装
 */
export class SocketUtil {

    private static instance: SocketUtil;

    private constructor() {
        this.net = new Net(Constant.SOCKET_URL);
    }

    public static getInstance(): SocketUtil {
        if (this.instance == null) {
            this.instance = new SocketUtil();
        }
        return this.instance;
    }

    private net: Net;

    public send(message: any): void {
        this.net.send(message);
    }


}