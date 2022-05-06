"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingStatus = void 0;
var ParsingStatus;
(function (ParsingStatus) {
    ParsingStatus[ParsingStatus["PENDING"] = 0] = "PENDING";
    ParsingStatus[ParsingStatus["PROCESSING"] = 1] = "PROCESSING";
    ParsingStatus[ParsingStatus["WAIT_TO_MARK_PARSED"] = 2] = "WAIT_TO_MARK_PARSED";
    ParsingStatus[ParsingStatus["PARSED"] = 3] = "PARSED";
})(ParsingStatus = exports.ParsingStatus || (exports.ParsingStatus = {}));
