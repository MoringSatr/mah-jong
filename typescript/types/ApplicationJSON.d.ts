export interface Stock {
    symbol: string;
}

export interface Chartlist {
    volume: number;
    avg_price: number;
    current: number;
    time: string;
}

export interface RootObject {
    stock: Stock;
    success: string;
    chartlist: Chartlist[];
}

const root: RootObject;
export default root;