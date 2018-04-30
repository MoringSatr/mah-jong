import {EventCode} from "../EventCode";
import {Event} from "../Event";

/**
 * 事件监听器抽象类
 */
export abstract class EventListener {

    private eventCode: EventCode;

    constructor(eventCode: EventCode) {
        this.eventCode = eventCode;
    }


    public getEventCode(): EventCode {
        return this.eventCode;
    }

    public abstract onEvent(event: Event): void;

}