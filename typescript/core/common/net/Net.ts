import {CmdHandles} from "../protocol/CmdHandles";
import {EventNotifyer} from "../event/listener/EventNotifyer";
import {ConnectEvent} from "./event/ConnectEvent";
import {DisconnectEvent} from "./event/DisconnectEvent";

/**
 * 长连接通讯(socket.io)
 */
export class Net {

    private socket: Socket;
    private _isConnect: boolean;

    constructor(url: string) {
        this.socket = io.connect(url);
        this.init();
    }

    private init(): void {
        this.socket.on("connect", this.connect);
        this.socket.on("disconnect", this.disconnect);
        this.socket.on("connect_failed", this.connect_failed);
        this.socket.on("error", this.error);
        this.socket.on("message", this.message);
        this.socket.on("reconnect", this.reconnect);
        this.socket.on("reconnect_failed", this.reconnect_failed);
    }

    private connect(data: any): void {
        cc.info("net connect");
        this._isConnect = true;
        EventNotifyer.getInstance().notifyEvent(new ConnectEvent());
    }

    private disconnect(data: any): void {
        cc.info("net disconnect");
        this._isConnect = false;
        EventNotifyer.getInstance().notifyEvent(new DisconnectEvent());
    }

    private connect_failed(data: any): void {
        cc.info("net connect_failed");
    }

    private error(data: any): void {
        cc.info("net error");
    }

    private message(data: any): void {
        //TODO
        CmdHandles.getInstance().handle(1, data);
    }

    private reconnect(data: any): void {
        cc.info("net reconnect");
    }

    private reconnect_failed(data: any): void {
        cc.info("net reconnect_failed");
    }

    public isConnect(): boolean {
        return this._isConnect;
    }

    //TODO
    public send(message: any): void {
        this.socket.emit("message", message);
    }

}