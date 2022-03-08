"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Side = void 0;
var Side;
(function (Side) {
    Side[Side["BUY"] = 0] = "BUY";
    Side[Side["SELL"] = 1] = "SELL";
})(Side = exports.Side || (exports.Side = {}));
var Status;
(function (Status) {
    Status[Status["OPEN"] = 0] = "OPEN";
    Status[Status["FILLED"] = 1] = "FILLED";
    Status[Status["UNEXECUTABLE"] = 2] = "UNEXECUTABLE";
    Status[Status["CANCELLED"] = 3] = "CANCELLED";
})(Status = exports.Status || (exports.Status = {}));
