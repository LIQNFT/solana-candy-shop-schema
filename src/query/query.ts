import { Side } from "../response";

// GET /api/{storeId}/order
export interface OrderQs {
    side: Side | null,
    ticker: string | null,
    status: string | null
}


// GET /api/{storeId}/trade
export interface TradeQs {
    seller: string | null,
    buyer: string | null
}