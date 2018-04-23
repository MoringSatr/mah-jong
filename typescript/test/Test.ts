import {TestEvent} from "./event/TestEvent";
import {EventListeners} from "../common/event/EventListeners";
import {TestListener} from "./listener/TestListener";
import {Config} from "../config/Config";

const {ccclass, property} = cc._decorator;
const listeners: EventListeners = EventListeners.getInstance();

@ccclass
export default class Test extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property
    text: string = 'hello';


    start() {
        this.text = "liu bowen";
        this.label.string = this.text;


        cc.loader.loadRes("config/application.json");

        let testEvent = new TestEvent("liubowen", 24);
        listeners.addListener(new TestListener());

        listeners.notify(testEvent);

        Config.getInstance().read(null);

    }


}