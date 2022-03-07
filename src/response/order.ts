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
