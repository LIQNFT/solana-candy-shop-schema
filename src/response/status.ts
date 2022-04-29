export interface ShopStatus {
  timestamp: number;
}

export enum ShopAction {
  SELL = "SELL",
  BUY = "BUY",
  CANCEL = "CANCEL",
}
