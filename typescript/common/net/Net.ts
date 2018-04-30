/**
 * 长连接通讯(socket.io)
 */
export class Net {

    private socket: Socket;
    private isConnect: boolean;

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
        this.isConnect = true;
    }

    private disconnect(data: any): void {
        this.isConnect = false;
    }

    private connect_failed(data: any): void {

    }

    private error(data: any): void {

    }

    private message(data: any): void {

    }

    private reconnect(data: any): void {

    }

    private reconnect_failed(data: any): void {

    }

}