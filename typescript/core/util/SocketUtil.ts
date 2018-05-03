import {Net} from "../common/net/Net";
import {Constant} from "../common/Constant";
import {coreProto} from "../lib/Protocol";
import Message = coreProto.Message;

/**
 * 长连接封装
 */
export class SocketUtil {

    private static instance: SocketUtil;

    private constructor() {
    }

    public static getInstance(): SocketUtil {
        if (this.instance == null) {
            this.instance = new SocketUtil();
        }
        return this.instance;
    }

    private net: Net;

    public connect(): void {
        this.net = new Net(Constant.SOCKET_URL);
    }

    public send(message: Message): void {
        this.net.send(message);
    }


}