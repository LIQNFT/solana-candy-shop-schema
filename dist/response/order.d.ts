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
    metadata: string;
    tokenMint: string;
    nftUri: string;
    nftImageLink: string | null;
    nftAnimationLink: string | null;
    tradeState: string;
    status: Status;
    walletAddress: string;
    txHash: string;
}
