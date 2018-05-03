import {TestEvent} from "./event/TestEvent";
import {TestListener} from "./listener/TestListener";
import {TestEventListeners} from "./listener/TestEventListeners";
import {EventNotifyer} from "../core/common/event/listener/EventNotifyer";
import {SocketUtil} from "../core/util/SocketUtil";
import {TestConnectListener} from "./listener/TestConnectListener";
import {coreProto} from "../core/lib/Protocol";
import Message = coreProto.Message;
import LongMsg = coreProto.LongMsg;
import {UserLoginCmd} from "../user/cmd/UserLoginCmd";
import {UserController} from "../user/UserController";

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

        SocketUtil.getInstance().connect();

        UserController.getInstence().start();
    }


    protected onDestroy(): void {
        this.listeners.unload();
        super.onDestroy();
    }

    public login(): void {
        let longMsg = new LongMsg();
        longMsg.value = 110;
        let message = new Message();
        message.cmd = 10001;
        message.body = LongMsg.encode(longMsg).finish();

        SocketUtil.getInstance().send(message);

    }
}