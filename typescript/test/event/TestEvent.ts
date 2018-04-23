import {Event} from "../../common/event/Event";
import {EventCode} from "../../common/event/EventCode";

export class TestEvent extends Event {

    constructor() {
        super(EventCode.event_1);
    }

}