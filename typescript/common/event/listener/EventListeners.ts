import {EventListener} from "./EventListener";
import {EventCode} from "../EventCode";
import {Event} from "../Event";

/**
 * @author: liubowen
 * @date:
 * @description: 事件监听器集合，改集合中的监听的事件类型是唯一的
 */
export abstract class EventListeners {

    private name: string;
    private listeners: Map<EventCode, EventListener>;

    constructor(name: string) {
        this.name = name;
        this.listeners = new Map<EventCode, EventListener>();
    }

    public getName(): string {
        return this.name;
    }

    public regist(listener: EventListener): void {
        this.listeners.set(listener.getEventCode(), listener);
    }

    public unregist(eventCode: EventCode): void {
        this.listeners.delete(eventCode);
    }

    public notifyEvent(event: Event): void {
        let listener = this.listeners.get(event.getEventCode());
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    }


}