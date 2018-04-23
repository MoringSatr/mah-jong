const appliactionConfig = require("../../config/application.json");

export class Config {

    private static _instance: Config;

    public static getInstance(): Config {
        if (this._instance == null) {
            this._instance = new Config();
        }
        return this._instance;
    }

    private constructor() {
    }


    public read(data: JSON): void {
        cc.log("Config read data : ", data);
        cc.log("appliactionConfig : ", appliactionConfig);
    }

}