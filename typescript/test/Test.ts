import {EventCode} from "../common/event/EventCode";
import {Event} from "../common/event/Event";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {

    @property(cc.Label)
    label: cc.Label;

    @property
    text: string = 'hello';


    start() {
        this.text = "liu bowen";
        this.label.string = this.text;


        cc.loader.loadRes("config/application.yml");
    }


}