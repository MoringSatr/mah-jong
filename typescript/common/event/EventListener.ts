import {EventCode} from "./EventCode";
import {Event} from "./Event";

export abstract class EventListener {

    protected _eventType: EventCode;


    constructor(eventType: EventCode) {
        this._eventType = eventType;
    }


    get eventType(): EventCode {
        return this._eventType;
    }

    abstract onEvent(event: Event): void;

}