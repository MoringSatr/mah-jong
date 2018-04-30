import {CmdHandles} from "../common/protocol/CmdHandles";

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


}