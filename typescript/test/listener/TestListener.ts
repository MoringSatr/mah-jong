import {EventListener} from "../../core/common/event/listener/EventListener";
import {TestEvent} from "../event/TestEvent";
import {EventCode} from "../../core/common/event/EventCode";
import {Event} from "../../core/common/event/Event";

export class TestListener extends EventListener {

    constructor() {
        super(EventCode.TEST);
    }

    public onEvent(event: Event): void {
        let testEvent: TestEvent = Event.cast(event);
        cc.log("testEvent : ", JSON.stringify(testEvent));
    }

}