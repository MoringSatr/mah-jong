/**
 * 抽象 CMD 协议处理器
 */
import {CmdHandles} from "./CmdHandles";
import {coreProto} from "../../../types/Protocol";
import Message = coreProto.Message;

export abstract class CmdHandle {

    private cmd: number;

    constructor(cmd: number) {
        this.cmd = cmd;
        this.init();
    }

    private init(): void {
        CmdHandles.getInstance().regist(this);
    }

    public getCmd(): number {
        return this.cmd;
    }

    /** 后端参数过来处理 */
    public abstract handle(message: Message): void;

}