export interface ShopStatus {
    timestamp: number;
    type: ShopStatusType;
}
export declare enum ShopStatusType {
    Order = "ORDER",
    Trade = "TRADE"
}
