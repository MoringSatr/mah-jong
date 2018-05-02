import {Event} from "../../event/Event";
import {EventCode} from "../../event/EventCode";

/**
 * socket 断开连接事件
 */
export class DisconnectEvent extends Event {


    constructor() {
        super(EventCode.NET_DISCONNECT);
    }

}