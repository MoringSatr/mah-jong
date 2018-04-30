/**
 * 长连接通讯(socket.io)
 */
export class Net {

    private socketIO: Socket;

    constructor(url: string) {
        this.socketIO = io.connect(url);
    }

}