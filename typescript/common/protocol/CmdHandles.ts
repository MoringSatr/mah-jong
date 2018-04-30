/**
 * 模块CMD处理器集合
 */
import {CmdHandle} from "./CmdHandle";

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

    public handle(cmd: number, data: any): void {
        let handle = this.cmdHandles.get(cmd);
        if (handle == null) {
            cc.error("not have handle the cmd , cmd : ", cmd);
            return;
        }
        handle.handle(data);
    }

}