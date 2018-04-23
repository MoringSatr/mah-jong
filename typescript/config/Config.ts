const appliactionConfig = require("../../config/application.json");

export class Config {

    private static instance: Config;

    public static getInstance(): Config {
        if (this.instance == null) {
            this.instance = new Config();
        }
        return this.instance;
    }

    private constructor() {
    }


    public read(data: JSON): void {
        cc.log("Config read data : ", data);
        cc.log("appliactionConfig : ", appliactionConfig);
    }

}