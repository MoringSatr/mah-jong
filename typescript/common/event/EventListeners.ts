import {EventCode} from "./EventCode";
import {EventListener} from "./EventListener";
import {Event} from "./Event";

export class EventListeners {

    private static instance: EventListeners;


    private constructor() {
        this.listeners = new Map<EventCode, EventListener>();
    }

    public static getInstance(): EventListeners {
        if (this.instance == null) {
            this.instance = new EventListeners();
        }
        return this.instance;
    }

    private listeners: Map<EventCode, EventListener>;

    public addListener(listener: EventListener): void {
        this.listeners.set(listener.eventType, listener);
    }

    public removeListener(eventCode: EventCode): void {
        this.listeners.delete(eventCode);
    }

    public notify(event: Event): void {
        let listener = this.listeners.get(event.eventType);
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    }

}