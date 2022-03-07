export enum Side {
    BUY,
    SELL
}

export enum Status {
    OPEN,
    FILLED,
    UNEXECUTABLE
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
