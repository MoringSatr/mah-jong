import {Event} from "../../core/common/event/Event";
import {EventCode} from "../../core/common/event/EventCode";

export class TestEvent extends Event {

    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        super(EventCode.TEST);
        this.name = name;
        this.age = age;
    }


}