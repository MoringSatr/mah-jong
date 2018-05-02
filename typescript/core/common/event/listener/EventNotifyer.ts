import {EventListeners} from "./EventListeners";
import {Event} from "../Event";

/**
 * 事件发射器
 */
export class EventNotifyer {

    private static instance: EventNotifyer;

    private listeners: Map<string, EventListeners>;

    private constructor() {
        this.listeners = new Map<string, EventListeners>();
    }

    public static getInstance(): EventNotifyer {
        if (this.instance == null) {
            this.instance = new EventNotifyer();
        }
        return this.instance;
    }

    public regist(listeners: EventListeners): void {
        this.listeners.set(listeners.getName(), listeners);
    }

    public unregist(listenersName: string): void {
        this.listeners.delete(listenersName);
    }

    public notifyEvent(event: Event): void {
        this.listeners.forEach(value => value.notifyEvent(event));
    }

}