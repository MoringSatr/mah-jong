import {EventCode} from "./EventCode";

/**
 * 事件抽象类
 */
export abstract class Event {

    private eventType: EventCode;

    constructor(eventType: EventCode) {
        this.eventType = eventType;
    }

    public getEventCode(): EventCode {
        return this.eventType;
    }

    public static cast<T extends Event>(event: Event): T {
        return <T>event;
    }

}