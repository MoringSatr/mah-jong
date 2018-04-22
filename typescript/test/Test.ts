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
    }

}