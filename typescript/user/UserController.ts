import {BaseController} from "../core/controller/BaseController";
import {EventListeners} from "../core/common/event/listener/EventListeners";
import {UserLoginCmd} from "./cmd/UserLoginCmd";
import {CmdHandles} from "../core/common/protocol/CmdHandles";

export class UserController extends BaseController {

    private static instance: UserController;

    private constructor() {
        super(new EventListeners("userListeners"));
    }

    public static getInstence(): UserController {
        if (this.instance == null) {
            this.instance = new UserController();
        }
        return this.instance;
    }


    public load(): void {
    }

    public registEvent(): void {
    }

    public registCmd(): void {
        CmdHandles.getInstance().regist(new UserLoginCmd());
    }


}