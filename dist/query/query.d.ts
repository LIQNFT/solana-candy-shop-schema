import { Side } from "../response";
export interface OrderQs {
    side: Side | null;
    ticker: string | null;
    status: string | null;
}
export interface TradeQs {
    seller: string | null;
    buyer: string | null;
}
