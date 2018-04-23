import {Event} from "../../common/event/Event";
import {EventCode} from "../../common/event/EventCode";

export class TestEvent extends Event {

    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        super(EventCode.event_1);
        this.name = name;
        this.age = age;
    }


}