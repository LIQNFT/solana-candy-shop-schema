export declare enum Side {
    BUY = 0,
    SELL = 1
}
export declare enum Status {
    OPEN = 0,
    FILLED = 1,
    UNEXECUTABLE = 2
}
export interface Order {
    side: Side;
    ticker: string;
    price: string;
    amount: string;
    edition: number | null;
    tokenAccount: string;
    tokenMint: string;
    tradeState: string;
    status: Status;
    walletAddress: string;
    txHash: string;
}
