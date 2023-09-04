"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailable = void 0;
const finnhub = require('finnhub');
function getAvailable(ticker, res) {
    const superagent = require('superagent');
    superagent.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=' + process.env.FINNHUB_API_KEY)
        .end((err, response) => {
        if (err) {
            return console.log(response);
        }
        let arr = [{}];
        arr.pop();
        JSON.parse(response === null || response === void 0 ? void 0 : response.text).forEach((element) => {
            arr.push({ "description": element === null || element === void 0 ? void 0 : element.description, "symbol": element === null || element === void 0 ? void 0 : element.displaySymbol });
        });
        res.json({ "data": arr });
    });
}
exports.getAvailable = getAvailable;
