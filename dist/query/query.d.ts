import { Side, Status } from "../response";
export interface OrderQs {
    offset?: number;
    limit?: number;
    filterArr?: OrderFilter[];
}
export interface OrderFilter {
    side: Side;
    status: Status;
}
export interface TradeQs {
    offset?: number;
    limit?: number;
}
