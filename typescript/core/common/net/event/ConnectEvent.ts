import {Event} from "../../event/Event";
import {EventCode} from "../../event/EventCode";

/**
 * socket 连接事件
 */
export class ConnectEvent extends Event {


    constructor() {
        super(EventCode.NET_CONNECT);
    }

}