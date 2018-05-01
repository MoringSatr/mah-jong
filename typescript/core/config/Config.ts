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
    }

}