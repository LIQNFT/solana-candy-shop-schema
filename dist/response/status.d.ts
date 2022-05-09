export interface ShopStatus {
    action: ShopAction;
    timestamp: number;
}
export declare enum ShopAction {
    SELL = "SELL",
    BUY = "BUY",
    CANCEL = "CANCEL"
}
