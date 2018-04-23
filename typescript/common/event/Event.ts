import {EventCode} from "./EventCode";

export abstract class Event {

    protected _eventType: EventCode;

    constructor(eventType: EventCode) {
        this._eventType = eventType;
    }

    get eventType(): number {
        return this._eventType;
    }

    public static cast<T extends Event>(event:Event): T {
        return <T>event;
    }

}