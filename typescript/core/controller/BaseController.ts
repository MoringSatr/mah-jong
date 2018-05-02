import {EventListeners} from "../common/event/listener/EventListeners";

/**
 * 游戏逻辑控制器 每个模块拥有一个控制器。控制器为单利模式<br/>
 * 控制器用了来控制场景变换，场景中组件加载和卸载，组件变化。<br/>
 * 游戏具体逻辑处理在service中处理
 */
export abstract class BaseController {

    private listeners: EventListeners;

    constructor(listeners: EventListeners) {
        this.listeners = listeners;
    }

    public start(): void {
        this.listeners.load();
        this.load();
    }

    public destory(): void {
        this.listeners.unload();
        this.unload();
    }

    public abstract load(): void;

    public abstract unload(): void;

}