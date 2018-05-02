import {TestEvent} from "./event/TestEvent";
import {TestListener} from "./listener/TestListener";
import {TestEventListeners} from "./listener/TestEventListeners";
import {EventNotifyer} from "../core/common/event/listener/EventNotifyer";
import {SocketUtil} from "../core/util/SocketUtil";
import {TestConnectListener} from "./listener/TestConnectListener";
import {HTTPUtil} from "../core/util/HTTPUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export class Test extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property
    text: string = 'hello';

    private listeners: TestEventListeners;


    start() {
        this.text = "liu bowen";
        this.label.string = this.text;
        this.listeners = new TestEventListeners().load();

        this.listeners.regist(new TestListener());
        this.listeners.regist(new TestConnectListener());

        let testEvent = new TestEvent("liubowen", 24);

        EventNotifyer.getInstance().notifyEvent(testEvent);

        SocketUtil.getInstance().send("assad");


        HTTPUtil.post("http://localhost:9099/test/hollo", (data) => {
            cc.info("wwww", data);
        });

    }


    protected onDestroy(): void {
        this.listeners.unload();
        super.onDestroy();
    }
}