/// <reference path="../../creator.d.ts"/>
// Global Namespace
declare let jsb: any;
declare let dragonBones: any;
declare let CC_EDITOR: boolean;
declare let CC_DEV: boolean;
declare let require: (string) => any;

declare var io: {
    connect(url: string): Socket;
};

interface Socket {
    on(event: string, callback: (data: any) => void);

    emit(event: string, data: any);
}
