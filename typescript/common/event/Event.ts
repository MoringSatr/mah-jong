import {EventCode} from "./EventCode";

export abstract class Event {

    protected _eventType: EventCode;

    constructor(eventType: EventCode) {
        this._eventType = eventType;
    }

    get eventType(): number {
        return this._eventType;
    }

    // public cast<T extends Event>(): T {
    //     return <T>this.cast();
    // }

}