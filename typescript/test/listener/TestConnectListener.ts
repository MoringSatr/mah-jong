import {EventListener} from "../../core/common/event/listener/EventListener";
import {TestEvent} from "../event/TestEvent";
import {EventCode} from "../../core/common/event/EventCode";
import {Event} from "../../core/common/event/Event";
import {ConnectEvent} from "../../core/common/net/event/ConnectEvent";

export class TestConnectListener extends EventListener {

    constructor() {
        super(EventCode.NET_CONNECT);
    }

    public onEvent(event: Event): void {
        let testEvent: ConnectEvent = Event.cast(event);
        cc.log("connectEvent : ", JSON.stringify(testEvent));
    }

}