export interface ShopStatus {
  action: ShopAction,
  timestamp: number;
}

export enum ShopAction {
  SELL = "SELL",
  BUY = "BUY",
  CANCEL = "CANCEL",
}
