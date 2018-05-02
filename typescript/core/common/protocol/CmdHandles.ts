/**
 * 模块CMD处理器集合
 */
import {CmdHandle} from "./CmdHandle";
import {coreProto} from "../../../types/Protocol";
import Message = coreProto.Message;

export class CmdHandles {

    private static instance: CmdHandles;

    private cmdHandles: Map<number, CmdHandle>;

    private constructor() {
        this.cmdHandles = new Map<number, CmdHandle>();
    }

    public static getInstance(): CmdHandles {
        if (this.instance == null) {
            this.instance = new CmdHandles();
        }
        return this.instance;
    }

    public regist(cmdHandle: CmdHandle): void {
        this.cmdHandles.set(cmdHandle.getCmd(), cmdHandle);
    }

    public handle(message: Message): void {
        if (message == null) {
            cc.error("CmdHandles handle message is null ");
            return;
        }
        let handle = this.cmdHandles.get(message.cmd);
        if (handle == null) {
            cc.error("CmdHandles handle not have handle by the cmd , cmd : ", message.cmd);
            return;
        }
        handle.handle(message);
    }

}