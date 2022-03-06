export declare type Side = "buy" | "sell";
export interface Order {
    side: Side;
    ticker: string;
    price: string;
    amount: string;
    edition: number | null;
    tokenAccount: string;
    tokenMint: string;
    tradeState: string;
    status: string;
    walletAddress: string;
    txHash: string;
}
