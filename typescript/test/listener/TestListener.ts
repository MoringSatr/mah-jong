import {EventListener} from "../../common/event/listener/EventListener";
import {TestEvent} from "../event/TestEvent";
import {EventCode} from "../../common/event/EventCode";
import {Event} from "../../common/event/Event";

export class TestListener extends EventListener {

    constructor() {
        super(EventCode.event_1);
    }

    onEvent(event: Event): void {
        let testEvent: TestEvent = Event.cast(event);
        cc.log("testEvent : ", JSON.stringify(testEvent));
    }
}