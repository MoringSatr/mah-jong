import {CmdHandle} from "../../core/common/protocol/CmdHandle";
import {coreProto} from "../../core/lib/Protocol";
import StringMsg = coreProto.StringMsg;

export class UserLoginCmd extends CmdHandle {

    constructor() {
        super(20001);
    }


    public handle(message: coreProto.Message): void {
        let userName = StringMsg.decode(message.body);
        cc.info("server send message for user login , message:{}, userName :{}", message.toJSON(), userName);
    }
}